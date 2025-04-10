import {
  Injectable,
  ForbiddenException,
  Inject,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePaymentInput } from '../dto/create-payment.input';
import { UpdatePaymentInput } from '../dto/update-payment.input';
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
    const duplicatedPaymentMethod =
      await this.paymentRepository.getPaymentMethodByUniqueMethod(data.method);
    if (duplicatedPaymentMethod) {
      throw new ConflictException('PAYMENT_METHOD_ALREADY_EXISTS');
    }
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
      throw new NotFoundException('PAYMENT_METHOD_NOT_FOUND');
    }
    if (payment.userId !== null && payment.userId !== userId) {
      throw new ForbiddenException('ACCESS_DENIED');
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
      throw new NotFoundException('PAYMENT_METHOD_NOT_FOUND');
    }
    if (payment.userId !== userId) {
      throw new ForbiddenException('ACCESS_DENIED');
    }
    const count =
      await this.paymentRepository.countInvoicesForPaymentMethod(paymentId);
    if (count > 0) {
      throw new BadRequestException('PAYMENT_METHOD_HAS_INVOICES');
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
      throw new NotFoundException('PAYMENT_METHOD_NOT_FOUND');
    }
    if (payment.userId !== userId) {
      throw new ForbiddenException('ACCESS_DENIED');
    }
    const count =
      await this.paymentRepository.countInvoicesForPaymentMethod(paymentId);
    if (count > 0) {
      throw new BadRequestException('PAYMENT_METHOD_HAS_INVOICES');
    }
    const result = await this.paymentRepository.deletePaymentMethod(paymentId);
    await this.cacheManager.del(`payment:${paymentId}`);
    await this.cacheManager.del(`paymentsList:${userId}`);
    return result;
  }
}
