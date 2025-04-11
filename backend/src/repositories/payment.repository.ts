import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentInput } from 'src/dto/create-payment.input';
import { UpdatePaymentInput } from 'src/dto/update-payment.input';
import { Payment } from '@prisma/client';

@Injectable()
export class PaymentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPaymentMethod(
    userId: string,
    input: CreatePaymentInput,
  ): Promise<Payment> {
    return this.prisma.payment.create({
      data: {
        userId,
        ...input,
      },
    });
  }

  async getPaymentMethodsByUser(userId: string): Promise<Payment[]> {
    return this.prisma.payment.findMany({
      where: {
        OR: [{ userId: null }, { userId }],
      },
    });
  }

  async getPaymentMethodByUniqueMethod(
    method: string,
  ): Promise<Payment | null> {
    return this.prisma.payment.findUnique({
      where: { method: method },
    });
  }

  async getPaymentMethodById(paymentId: number): Promise<Payment | null> {
    return this.prisma.payment.findUnique({
      where: { id: paymentId },
    });
  }

  async updatePaymentMethod(
    paymentId: number,
    input: UpdatePaymentInput,
  ): Promise<Payment> {
    return this.prisma.payment.update({
      where: { id: paymentId },
      data: { ...input },
    });
  }

  async deletePaymentMethod(paymentId: number): Promise<Payment> {
    return this.prisma.payment.delete({
      where: { id: paymentId },
    });
  }

  async countInvoicesForPaymentMethod(paymentId: number): Promise<number> {
    return this.prisma.invoice.count({
      where: { paymentId: paymentId },
    });
  }
}
