import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingResolver } from './setting.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [SettingService, SettingResolver],
})
export class SettingModule {}
