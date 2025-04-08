import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientInput } from 'src/client/dto/create-client.input';
import { UpdateClientInput } from 'src/client/dto/update-client.input';

@Injectable()
export class ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async checkUserCompanyAccess(
    userId: string,
    companyId: number,
  ): Promise<boolean> {
    const company = await this.prisma.company.findFirst({
      where: {
        id: companyId,
        userId: userId,
      },
    });
    return !!company;
  }

  async addClient(data: CreateClientInput) {
    return this.prisma.client.create({
      data: {
        ...data,
      },
    });
  }

  async getClientsByCompany(companyId: number) {
    return this.prisma.client.findMany({
      where: { companyId },
      include: {
        invoices: true,
      },
    });
  }

  async getClientById(clientId: number) {
    return this.prisma.client.findUnique({
      where: { id: clientId },
      include: {
        invoices: true,
      },
    });
  }

  async deleteClient(clientId: number) {
    const invoiceCount = await this.prisma.invoice.count({
      where: { buyerId: clientId },
    });
    if (invoiceCount > 0) {
      throw new BadRequestException(
        'Nie można usunąć klienta, ponieważ ma wystawione faktury.',
      );
    }
    return this.prisma.client.delete({
      where: { id: clientId },
    });
  }

  async updateClient(clientId: number, data: UpdateClientInput) {
    return this.prisma.client.update({
      where: { id: clientId },
      data,
    });
  }
}
