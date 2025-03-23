import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from '../@generated/client/client.model';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Request } from 'express';
import { UpdateClientInput } from './dto/update-client.input';
import { CreateClientDto } from './dto/create-client.dto';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Client])
  async getClients(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.clientService.getClients(userId, companyId);
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
    @Args('companyId', { type: () => Int }) companyId: number,
    @Args('name') name: string,
    @Args('tin', { nullable: true }) tin: string,
    @Args('bin', { nullable: true }) bin: string,
    @Args('street', { nullable: true }) street: string,
    @Args('buildingNo', { nullable: true }) buildingNo: string,
    @Args('apartmentNo', { nullable: true }) apartmentNo: string,
    @Args('zipCode', { nullable: true }) zipCode: string,
    @Args('city', { nullable: true }) city: string,
    @Args('province', { nullable: true }) province: string,
    @Args('county', { nullable: true }) county: string,
    @Args('municipality', { nullable: true }) municipality: string,
    @Args('email', { nullable: true }) email: string,
    @Args('phone', { nullable: true }) phone: string,
  ) {
    const userId = getUserIdFromContext(context);
    const data: CreateClientDto = {
      companyId,
      name,
      tin: tin ?? null,
      bin: bin ?? null,
      street: street ?? null,
      buildingNo: buildingNo ?? null,
      apartmentNo: apartmentNo ?? null,
      zipCode: zipCode ?? null,
      city: city ?? null,
      province: province ?? null,
      county: county ?? null,
      municipality: municipality ?? null,
      email: email ?? null,
      phone: phone ?? null,
    };

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
    @Args('data') data: UpdateClientInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.clientService.updateClient(userId, clientId, data);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new ForbiddenException('User not authenticated');
  }
  return userId;
}
