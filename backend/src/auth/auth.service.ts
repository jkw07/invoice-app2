import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async register(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = await this.prisma.user.create({
      data: { email, password_hash: hashedPassword },
    });

    return this.generateToken(user);
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user: User | null = await this.prisma.user.findUnique({
      where: { email },
    });

    const isMatch: boolean = user
      ? await bcrypt.compare(password, user.password_hash)
      : false;

    if (!user || !isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateToken(user);
  }

  private generateToken(user: User): { access_token: string } {
    return {
      access_token: this.jwtService.sign({ sub: user.id, email: user.email }),
    };
  }
}
