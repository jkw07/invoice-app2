import { Injectable } from '@nestjs/common';
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
    return this.prisma.client.delete({
      where: { id: clientId },
    });
  }

  async countInvoicesForClient(clientId: number): Promise<number> {
    return this.prisma.invoice.count({
      where: { buyerId: clientId },
    });
  }

  async updateClient(clientId: number, data: UpdateClientInput) {
    return this.prisma.client.update({
      where: { id: clientId },
      data,
    });
  }
}

//TODO dane nie edytowalne na FV - pobierac invoices, jesli sa - addNewCLient, jesli nie ma to update, dodac tez invoiceItem i reminders
//TODO dodac Promise<> do repo
//TODO w repository bez exeptions, przeniesc do service
