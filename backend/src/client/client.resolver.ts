import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from '../@generated/client/client.model';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Request } from 'express';
import { UpdateClientInput } from './dto/update-client.input';
import { CreateClientInput } from './dto/create-client.input';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Client])
  async getClientsByCompany(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.clientService.getClientsByCompany(userId, companyId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Client)
  async getClientById(
    @Context() context: { req: Request },
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.clientService.getClientById(userId, clientId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Client)
  async addClient(
    @Context() context: { req: Request },
    @Args('input') data: CreateClientInput,
  ): Promise<Client> {
    const userId = getUserIdFromContext(context);
    return this.clientService.addClient(userId, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Client)
  async deleteClient(
    @Context() context: { req: Request },
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.clientService.deleteClient(userId, clientId);
  }

  @Mutation(() => Client)
  @UseGuards(GqlAuthGuard)
  async updateClient(
    @Context() context: { req: Request },
    @Args('clientId', { type: () => Int }) clientId: number,
    @Args('input') data: UpdateClientInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.clientService.updateClient(userId, clientId, data);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new UnauthorizedException('User not authenticated');
  }
  return userId;
}

//TODO UnauthorizedException?
