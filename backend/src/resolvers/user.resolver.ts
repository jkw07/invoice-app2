import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserService } from '../services/user.service';
import { AppUser as UserModel } from '../dto/user.model';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserModel)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: { sub: string; email: string }) {
    return this.userService.findById(user.sub);
  }
}
