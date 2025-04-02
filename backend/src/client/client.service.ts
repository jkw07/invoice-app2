import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateClientInput } from './dto/update-client.input';
import { CreateClientInput } from './dto/create-client.input';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

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
    return this.clientRepository.addClient(data);
  }

  async getClientsByCompany(userId: string, companyId: number) {
    await this.checkAccessOrThrow(userId, companyId);
    return this.clientRepository.getClientsByCompany(companyId);
  }

  async getClientById(userId: string, clientId: number) {
    const client = await this.clientRepository.getClientById(clientId);

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    await this.checkAccessOrThrow(userId, client.companyId);

    return client;
  }

  async deleteClient(userId: string, clientId: number) {
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    await this.checkAccessOrThrow(userId, client.companyId);
    return this.clientRepository.deleteClient(clientId);
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

    return this.clientRepository.updateClient(clientId, data);
  }
}
