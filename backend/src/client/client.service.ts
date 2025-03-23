import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
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

  async addClient(userId: string, data: CreateClientDto) {
    const hasAccess = await this.checkUserCompanyAccess(userId, data.companyId);
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.prisma.client.create({
      data: {
        ...data,
        tin: data.tin ?? null,
        bin: data.bin ?? null,
        street: data.street ?? null,
        buildingNo: data.buildingNo ?? null,
        apartmentNo: data.apartmentNo ?? null,
        city: data.city ?? null,
        zipCode: data.zipCode ?? null,
        province: data.province ?? null,
        county: data.county ?? null,
        municipality: data.municipality ?? null,
        email: data.email ?? null,
        phone: data.phone ?? null,
      },
    });
  }

  async getClients(userId: string, companyId: number) {
    const hasAccess = await this.checkUserCompanyAccess(userId, companyId);
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.prisma.client.findMany({
      where: { companyId },
      include: {
        invoices: true,
      },
    });
  }

  async getClientById(userId: string, clientId: number) {
    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
      include: {
        invoices: true,
      },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    const hasAccess = await this.checkUserCompanyAccess(
      userId,
      client.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }

    return client;
  }

  async deleteClient(userId: string, clientId: number) {
    await this.getClientById(userId, clientId);
    return this.prisma.client.delete({
      where: { id: clientId },
    });
  }

  async updateClient(userId: string, clientId: number, data: UpdateClientDto) {
    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    const hasAccess = await this.checkUserCompanyAccess(
      userId,
      client.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('Access denied to this company');
    }

    return this.prisma.client.update({
      where: { id: clientId },
      data,
    });
  }
}
