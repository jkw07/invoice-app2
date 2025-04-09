import { Injectable, ForbiddenException, Inject } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { PaymentRepository } from '../repositories/payment.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Payment } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly paymentRepository: PaymentRepository,
  ) {}

  async createPaymentMethod(
    userId: string,
    data: CreatePaymentInput,
  ): Promise<Payment> {
    await this.cacheManager.del(`paymentsList:${userId}`);
    return this.paymentRepository.createPaymentMethod(userId, data);
  }

  async getPaymentMethodsByUser(userId: string): Promise<Payment[]> {
    const cacheKey = `paymentsList:${userId}`;
    const cached = await this.cacheManager.get<Payment[]>(cacheKey);
    if (cached) {
      return cached;
    }
    const payments =
      await this.paymentRepository.getPaymentMethodsByUser(userId);
    for (const payment of payments) {
      const itemKey = `payment:${payment.id}`;
      await this.cacheManager.set(itemKey, payment, 300);
    }
    await this.cacheManager.set(cacheKey, payments, 300);
    return payments;
  }

  async getPaymentMethodById(
    userId: string,
    paymentId: number,
  ): Promise<Payment> {
    const cacheKey = `payment:${paymentId}`;
    const cached = await this.cacheManager.get<Payment>(cacheKey);
    if (cached?.userId === userId || cached?.userId === null) {
      return cached;
    }
    const payment =
      await this.paymentRepository.getPaymentMethodById(paymentId);
    if (!payment) {
      throw new ForbiddenException('Payment method not found');
    }
    if (payment.userId !== null && payment.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    await this.cacheManager.set(cacheKey, payment, 300);
    return payment;
  }

  async updatePaymentMethod(
    userId: string,
    paymentId: number,
    data: UpdatePaymentInput,
  ): Promise<Payment> {
    const payment =
      await this.paymentRepository.getPaymentMethodById(paymentId);
    if (!payment) {
      throw new ForbiddenException('Payment method not found');
    }
    if (payment.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    const updated = await this.paymentRepository.updatePaymentMethod(
      paymentId,
      data,
    );
    await this.cacheManager.del(`payment:${paymentId}`);
    await this.cacheManager.del(`paymentsList:${userId}`);
    return updated;
  }

  async deletePaymentMethod(
    userId: string,
    paymentId: number,
  ): Promise<Payment> {
    const payment =
      await this.paymentRepository.getPaymentMethodById(paymentId);
    if (!payment) {
      throw new ForbiddenException('Payment method not found');
    }
    if (payment.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    const result = await this.paymentRepository.deletePaymentMethod(paymentId);
    await this.cacheManager.del(`payment:${paymentId}`);
    await this.cacheManager.del(`paymentsList:${userId}`);
    return result;
  }
}
