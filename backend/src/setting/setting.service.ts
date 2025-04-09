import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { UpdateSettingInput } from './dto/update-setting.input';
import { CreateSettingInput } from './dto/create-setting.input';
import { SettingRepository } from '../repositories/setting.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Setting } from '@prisma/client';

@Injectable()
export class SettingService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly settingRepository: SettingRepository,
  ) {}

  private async checkAccessOrThrow(userId: string, companyId: number) {
    const hasAccess = await this.settingRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
  }

  async addSetting(userId: string, data: CreateSettingInput): Promise<Setting> {
    await this.checkAccessOrThrow(userId, data.companyId);
    await this.cacheManager.del(`settingsList:${data.companyId}`);
    return this.settingRepository.addSetting(data);
  }

  async getSettingsByCompany(
    userId: string,
    companyId: number,
  ): Promise<Setting[]> {
    await this.checkAccessOrThrow(userId, companyId);
    const cacheKey = `settingsList:${companyId}`;
    const cached = await this.cacheManager.get<Setting[]>(cacheKey);
    if (cached) {
      return cached;
    }
    const settings =
      await this.settingRepository.getSettingsByCompany(companyId);
    for (const setting of settings) {
      const itemKey = `setting:${setting.id}`;
      await this.cacheManager.set(itemKey, setting, 300);
    }
    await this.cacheManager.set(cacheKey, settings, 300);
    return settings;
  }

  async getSettingById(userId: string, settingId: number): Promise<Setting> {
    const cacheKey = `setting:${settingId}`;
    const cached = await this.cacheManager.get<Setting>(cacheKey);
    if (cached) {
      await this.checkAccessOrThrow(userId, cached.companyId);
      return cached;
    }
    const setting = await this.settingRepository.getSettingById(settingId);

    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    await this.checkAccessOrThrow(userId, setting.companyId);
    await this.cacheManager.set(cacheKey, setting, 300);
    return setting;
  }

  async deleteSetting(userId: string, settingId: number): Promise<Setting> {
    const setting = await this.settingRepository.getSettingById(settingId);
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    await this.checkAccessOrThrow(userId, setting.companyId);
    const result = await this.settingRepository.deleteSetting(settingId);
    await this.cacheManager.del(`setting:${settingId}`);
    await this.cacheManager.del(`settingsList:${setting.companyId}`);
    return result;
  }

  async updateSetting(
    userId: string,
    settingId: number,
    data: UpdateSettingInput,
  ): Promise<Setting> {
    const setting = await this.settingRepository.getSettingById(settingId);
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }
    await this.checkAccessOrThrow(userId, setting.companyId);
    const updated = await this.settingRepository.updateSetting(settingId, data);
    await this.cacheManager.del(`settingt:${settingId}`);
    await this.cacheManager.del(`settingsList:${setting.companyId}`);
    return updated;
  }
}
