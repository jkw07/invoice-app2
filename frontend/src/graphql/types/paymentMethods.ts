export interface PaymentMethod {
  id: number;
  method: string;
}

export interface GetPaymentMethodsQuery {
  getPaymentMethodsByUser: PaymentMethod[];
}
