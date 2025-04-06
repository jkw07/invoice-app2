import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { UpdateClientInput } from './dto/update-client.input';
import { CreateClientInput } from './dto/create-client.input';
import { ClientRepository } from '../repositories/client.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

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
      throw new ForbiddenException('You do not have access to this company');
    }
  }

  async addClient(userId: string, data: CreateClientInput) {
    await this.checkAccessOrThrow(userId, data.companyId);
    await this.cacheManager.del(`${userId}:clientsList:${data.companyId}`);
    return this.clientRepository.addClient(data);
  }

  async getClientsByCompany(userId: string, companyId: number) {
    await this.checkAccessOrThrow(userId, companyId);
    const cacheKey = `${userId}:clientsList:${companyId}`;
    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      return cached;
    }
    const clients = await this.clientRepository.getClientsByCompany(companyId);
    for (const client of clients) {
      const itemKey = `${userId}:client:${client.companyId}:${client.id}`;
      await this.cacheManager.set(itemKey, client, 120);
    }
    await this.cacheManager.set(cacheKey, clients, 120);
    return clients;
  }

  async getClientById(userId: string, clientId: number, companyId: number) {
    const cacheKey = `${userId}:client:${companyId}:${clientId}`;
    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      await this.checkAccessOrThrow(userId, companyId);
      return cached;
    }
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    await this.cacheManager.set(cacheKey, client, 120);
    return client;
  }

  async deleteClient(userId: string, clientId: number) {
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    const result = await this.clientRepository.deleteClient(clientId);
    await this.cacheManager.del(`${userId}:clientsList:${client.companyId}`);
    await this.cacheManager.del(
      `${userId}:client:${client.companyId}:${clientId}`,
    );
    return result;
  }

  async updateClient(
    userId: string,
    clientId: number,
    data: UpdateClientInput,
  ) {
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    const updated = await this.clientRepository.updateClient(clientId, data);
    await this.cacheManager.del(`${userId}:clientsList:${client.companyId}`);
    await this.cacheManager.del(
      `${userId}:client:${client.companyId}:${clientId}`,
    );
    return updated;
  }
}
