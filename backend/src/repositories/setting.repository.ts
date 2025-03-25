import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSettingInput } from 'src/setting/dto/create-setting.input';
import { UpdateSettingInput } from 'src/setting/dto/update-setting.input';

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

  async addSetting(data: CreateSettingInput) {
    return this.prisma.setting.create({
      data: {
        ...data,
      },
    });
  }

  async getSettingsByCompany(companyId: number) {
    return this.prisma.setting.findMany({
      where: { companyId },
    });
  }

  async getSettingById(settingId: number) {
    return this.prisma.setting.findUnique({
      where: { id: settingId },
    });
  }

  async deleteSetting(settingId: number) {
    return this.prisma.setting.delete({
      where: { id: settingId },
    });
  }

  async updateSetting(settingId: number, data: UpdateSettingInput) {
    return this.prisma.setting.update({
      where: { id: settingId },
      data,
    });
  }
}
