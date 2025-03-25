import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateSettingInput } from './dto/update-setting.input';
import { CreateSettingInput } from './dto/create-setting.input';
import { SettingRepository } from '../repositories/setting.repository';

@Injectable()
export class SettingService {
  constructor(private readonly settingRepository: SettingRepository) {}

  async addSetting(userId: string, data: CreateSettingInput) {
    const hasAccess = await this.settingRepository.checkUserCompanyAccess(
      userId,
      data.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.settingRepository.addSetting(data);
  }

  async getSettingsByCompany(userId: string, companyId: number) {
    const hasAccess = await this.settingRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.settingRepository.getSettingsByCompany(companyId);
  }

  async getSettingById(userId: string, settingId: number) {
    const setting = await this.settingRepository.getSettingById(settingId);

    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    const hasAccess = await this.settingRepository.checkUserCompanyAccess(
      userId,
      setting.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }

    return setting;
  }

  async deleteSetting(userId: string, settingId: number) {
    const setting = await this.settingRepository.getSettingById(settingId);
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }
    const hasAccess = await this.settingRepository.checkUserCompanyAccess(
      userId,
      setting.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.settingRepository.deleteSetting(settingId);
  }

  async updateSetting(
    userId: string,
    settingId: number,
    data: UpdateSettingInput,
  ) {
    const setting = await this.settingRepository.getSettingById(settingId);
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }
    const hasAccess = await this.settingRepository.checkUserCompanyAccess(
      userId,
      setting.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }

    return this.settingRepository.updateSetting(settingId, data);
  }
}
