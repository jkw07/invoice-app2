import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentInput } from 'src/payment/dto/create-payment.input';
import { UpdatePaymentInput } from 'src/payment/dto/update-payment.input';

@Injectable()
export class PaymentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPaymentMethod(userId: string, data: CreatePaymentInput) {
    return this.prisma.payment.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getPaymentMethodsByUser(userId: string) {
    return this.prisma.payment.findMany({
      where: {
        OR: [{ userId: null }, { userId }],
      },
    });
  }

  async getPaymentMethodById(paymentId: number) {
    return this.prisma.payment.findUnique({
      where: { id: paymentId },
    });
  }

  async updatePaymentMethod(paymentId: number, data: UpdatePaymentInput) {
    return this.prisma.payment.update({
      where: { id: paymentId },
      data,
    });
  }

  async deletePaymentMethod(paymentId: number) {
    return this.prisma.payment.delete({
      where: { id: paymentId },
    });
  }
}
