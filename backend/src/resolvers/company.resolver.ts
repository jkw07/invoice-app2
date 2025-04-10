import { Resolver, Mutation, Query, Args, Int, Context } from '@nestjs/graphql';
import { CompanyService } from '../services/company.service';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Company } from 'src/@generated/company/company.model';
import { Request } from 'express';
import { UpdateCompanyInput } from '../dto/update-company.input';
import { CreateCompanyInput } from '../dto/create-company.input';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company)
  async createCompany(
    @Context() context: { req: Request },
    @Args('input') input: CreateCompanyInput,
  ): Promise<Company> {
    const userId = getUserIdFromContext(context);
    return this.companyService.createCompany(userId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Company])
  async getCompaniesByUser(
    @Context() context: { req: Request },
  ): Promise<Company[]> {
    const userId = getUserIdFromContext(context);
    return this.companyService.getCompaniesByUser(userId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Company)
  async getDefaultCompanyByUser(
    @Context() context: { req: Request },
  ): Promise<Company> {
    const userId = getUserIdFromContext(context);
    return this.companyService.getDefaultCompanyByUser(userId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Company)
  async getCompanyById(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.companyService.getCompanyById(userId, companyId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company)
  async updateCompany(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
    @Args('input') input: UpdateCompanyInput,
  ): Promise<Company> {
    const userId = getUserIdFromContext(context);
    return this.companyService.updateCompany(userId, companyId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company)
  async deleteCompany(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ): Promise<Company> {
    const userId = getUserIdFromContext(context);
    return this.companyService.deleteCompany(userId, companyId);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new UnauthorizedException('USER_NOT_AUTHENTICATED');
  }
  return userId;
}
