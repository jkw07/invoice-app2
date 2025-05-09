import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientInput } from 'src/dto/create-client.input';
import { UpdateClientInput } from 'src/dto/update-client.input';
import { Client, Invoice } from '@prisma/client';

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

  async addClient(input: CreateClientInput): Promise<Client> {
    return this.prisma.client.create({
      data: {
        ...input,
      },
    });
  }

  async getClientsByCompany(
    companyId: number,
  ): Promise<(Client & { invoices: Invoice[] })[]> {
    return this.prisma.client.findMany({
      where: { companyId },
      include: {
        invoices: true,
      },
    });
  }

  async getClientById(
    clientId: number,
  ): Promise<(Client & { invoices: Invoice[] }) | null> {
    return this.prisma.client.findUnique({
      where: { id: clientId },
      include: {
        invoices: true,
      },
    });
  }

  async deleteClient(clientId: number): Promise<Client> {
    return this.prisma.client.delete({
      where: { id: clientId },
    });
  }

  async countInvoicesForClient(clientId: number): Promise<number> {
    return this.prisma.invoice.count({
      where: { buyerId: clientId },
    });
  }

  async updateClient(
    clientId: number,
    input: UpdateClientInput,
  ): Promise<Client> {
    return this.prisma.client.update({
      where: { id: clientId },
      data: { ...input },
    });
  }
}
