import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
  ForbiddenException,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from 'src/@generated/client/client.model';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addClient(
    @Req() req: Request,
    @Body() body: CreateClientDto,
  ): Promise<Client> {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.clientService.addClient(req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':companyId')
  async getClients(@Req() req: Request, @Param('companyId') companyId: number) {
    if (!req.user) throw new ForbiddenException('Unauthorized');
    return this.clientService.getClients(req.user.sub, Number(companyId));
  }

  @UseGuards(JwtAuthGuard)
  @Get('single/:clientId')
  async getClientById(
    @Req() req: Request,
    @Param('clientId') clientId: number,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');
    return this.clientService.getClientById(req.user.sub, Number(clientId));
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':clientId')
  async deleteClient(@Req() req: Request, @Param('clientId') clientId: number) {
    if (!req.user) throw new ForbiddenException('Unauthorized');
    return this.clientService.deleteClient(req.user.sub, Number(clientId));
  }

  @Put(':invoiceId')
  @UseGuards(JwtAuthGuard)
  async updateClient(
    @Req() req: Request,
    @Param('clientId') clientId: number,
    @Body() body: UpdateClientDto,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.clientService.updateClient(
      req.user.sub,
      Number(clientId),
      body,
    );
  }
}
