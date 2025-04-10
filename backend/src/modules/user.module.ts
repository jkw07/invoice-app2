import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserResolver } from '../resolvers/user.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
