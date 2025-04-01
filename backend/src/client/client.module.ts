import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { ClientRepository } from 'src/repositories/client.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [ClientService, ClientResolver, ClientRepository],
})
export class ClientModule {}
