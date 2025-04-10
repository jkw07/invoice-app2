import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSettingInput } from 'src/dto/create-setting.input';
import { UpdateSettingInput } from 'src/dto/update-setting.input';
import { Setting } from '@prisma/client';

@Injectable()
export class SettingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async checkUserCompanyAccess(
    userId: string,
    companyId: number,
  ): Promise<boolean> {
    const company = await this.prisma.company.findFirst({
      where: {
        id: companyId,
        userId: userId,
      },
    });
    return !!company;
  }

  async addSetting(data: CreateSettingInput): Promise<Setting> {
    return this.prisma.setting.create({
      data: {
        ...data,
      },
    });
  }

  async getSettingsByCompany(companyId: number): Promise<Setting[]> {
    return this.prisma.setting.findMany({
      where: { companyId },
    });
  }

  async getSettingById(settingId: number): Promise<Setting | null> {
    return this.prisma.setting.findUnique({
      where: { id: settingId },
    });
  }

  async deleteSetting(settingId: number): Promise<Setting> {
    return this.prisma.setting.delete({
      where: { id: settingId },
    });
  }

  async updateSetting(
    settingId: number,
    data: UpdateSettingInput,
  ): Promise<Setting> {
    return this.prisma.setting.update({
      where: { id: settingId },
      data,
    });
  }
}
