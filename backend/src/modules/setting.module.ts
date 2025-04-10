import { Module } from '@nestjs/common';
import { SettingService } from '../services/setting.service';
import { SettingResolver } from '../resolvers/setting.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { SettingRepository } from 'src/repositories/setting.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [SettingService, SettingResolver, SettingRepository],
})
export class SettingModule {}
