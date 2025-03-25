import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: AuthDto) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: AuthDto) {
    const { access_token } = await this.authService.login(
      body.email,
      body.password,
    );
    const user = await this.authService.findByEmail(body.email);

    if (!user) {
      throw new Error('User not found');
    }

    return {
      access_token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request) {
    return {
      message: `User ${req.user} logged out successfully`,
    };
  }
}
