import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { UpdateClientInput } from '../dto/update-client.input';
import { CreateClientInput } from '../dto/create-client.input';
import { ClientRepository } from '../repositories/client.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Client } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly clientRepository: ClientRepository,
  ) {}

  private async checkAccessOrThrow(userId: string, companyId: number) {
    const hasAccess = await this.clientRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('ACCESS_DENIED');
    }
  }

  async addClient(userId: string, input: CreateClientInput): Promise<Client> {
    await this.checkAccessOrThrow(userId, input.companyId);
    await this.cacheManager.del(`clientsList:${input.companyId}`);
    return this.clientRepository.addClient(input);
  }

  async getClientsByCompany(
    userId: string,
    companyId: number,
  ): Promise<Client[]> {
    await this.checkAccessOrThrow(userId, companyId);
    const cacheKey = `clientsList:${companyId}`;
    const cached = await this.cacheManager.get<Client[]>(cacheKey);
    if (cached) {
      return cached;
    }
    const clients = await this.clientRepository.getClientsByCompany(companyId);
    for (const client of clients) {
      const itemKey = `client:${client.id}`;
      await this.cacheManager.set(itemKey, client, 300);
    }
    await this.cacheManager.set(cacheKey, clients, 300);
    return clients;
  }

  async getClientById(userId: string, clientId: number): Promise<Client> {
    const cacheKey = `client:${clientId}`;
    const cached = await this.cacheManager.get<Client>(cacheKey);
    if (cached) {
      await this.checkAccessOrThrow(userId, cached.companyId);
      return cached;
    }
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('CLIENT_NOT_FOUND');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    await this.cacheManager.set(cacheKey, client, 300);
    return client;
  }

  async deleteClient(userId: string, clientId: number): Promise<Client> {
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('CLIENT_NOT_FOUND');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    const count = await this.clientRepository.countInvoicesForClient(clientId);
    if (count > 0) {
      throw new BadRequestException('CLIENT_HAS_INVOICES');
    }
    const result = await this.clientRepository.deleteClient(clientId);
    await this.cacheManager.del(`clientsList:${client.companyId}`);
    await this.cacheManager.del(`client:${clientId}`);
    return result;
  }

  async updateClient(
    userId: string,
    clientId: number,
    input: UpdateClientInput,
  ): Promise<Client> {
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('CLIENT_NOT_FOUND');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    const count = await this.clientRepository.countInvoicesForClient(clientId);
    if (count > 0) {
      throw new BadRequestException('CLIENT_HAS_INVOICES_U');
    }
    const updated = await this.clientRepository.updateClient(clientId, input);
    await this.cacheManager.del(`clientsList:${client.companyId}`);
    await this.cacheManager.del(`client:${clientId}`);
    return updated;
  }
}
