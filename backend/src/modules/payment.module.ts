import { Module } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { PaymentResolver } from '../resolvers/payment.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { PaymentRepository } from 'src/repositories/payment.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [PaymentService, PaymentResolver, PaymentRepository],
})
export class PaymentModule {}
