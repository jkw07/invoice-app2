import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { PaymentRepository } from '../repositories/payment.repository';
import { Payment } from 'src/@generated/payment/payment.model';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async createPaymentMethod(userId: string, data: CreatePaymentInput) {
    return this.paymentRepository.createPaymentMethod(userId, data);
  }

  async getPaymentMethodsByUser(userId: string): Promise<Payment[]> {
    return this.paymentRepository.getPaymentMethodsByUser(userId);
  }

  async getPaymentMethodById(
    userId: string,
    paymentId: number,
  ): Promise<Payment> {
    const payment =
      await this.paymentRepository.getPaymentMethodById(paymentId);
    if (!payment) {
      throw new ForbiddenException('Payment method not found');
    }
    if (payment.userId !== null && payment.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
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
    return this.paymentRepository.updatePaymentMethod(paymentId, data);
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
    return this.paymentRepository.deletePaymentMethod(paymentId);
  }
}
