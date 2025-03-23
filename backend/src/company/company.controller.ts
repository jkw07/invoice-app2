import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from 'src/@generated/company/company.model';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createCompany(
    @Req() req: Request,
    @Body() body: CreateCompanyDto,
  ): Promise<Company> {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.companyService.createCompany(req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCompanies(@Req() req: Request) {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.companyService.getCompanies(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':companyId')
  async updateCompany(
    @Req() req: Request,
    @Param('companyId') companyId: number,
    @Body() body: UpdateCompanyDto,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.companyService.updateCompany(
      req.user.sub,
      Number(companyId),
      body,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':companyId')
  async deleteCompany(
    @Req() req: Request,
    @Param('companyId') companyId: number,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.companyService.deleteCompany(req.user.sub, Number(companyId));
  }
}
