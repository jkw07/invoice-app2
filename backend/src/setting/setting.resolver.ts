import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { SettingService } from './setting.service';
import { Client } from '../@generated/client/client.model';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Request } from 'express';
import { UpdateSettingInput } from './dto/update-setting.input';
import { CreateSettingInput } from './dto/create-setting.input';
import { Setting } from 'src/@generated/setting/setting.model';

@Resolver(() => Setting)
export class SettingResolver {
  constructor(private readonly settingService: SettingService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Client])
  async getSettingsByCompany(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.settingService.getSettingsByCompany(userId, companyId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Setting)
  async getSettingById(
    @Context() context: { req: Request },
    @Args('settingId', { type: () => Int }) settingId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.settingService.getSettingById(userId, settingId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Setting)
  async addSetting(
    @Context() context: { req: Request },
    @Args('input') data: CreateSettingInput,
  ): Promise<Setting> {
    const userId = getUserIdFromContext(context);
    return this.settingService.addSetting(userId, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Setting)
  async deleteSetting(
    @Context() context: { req: Request },
    @Args('settingId', { type: () => Int }) settingId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.settingService.deleteSetting(userId, settingId);
  }

  @Mutation(() => Setting)
  @UseGuards(GqlAuthGuard)
  async updateSetting(
    @Context() context: { req: Request },
    @Args('settingId', { type: () => Int }) settingId: number,
    @Args('input') data: UpdateSettingInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.settingService.updateSetting(userId, settingId, data);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new UnauthorizedException('User not authenticated');
  }
  return userId;
}
