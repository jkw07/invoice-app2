import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User as PrismaUser } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<PrismaUser | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  login(user: PrismaUser) {
    const payload = { sub: user.id, email: user.email };
    const token = this.jwt.sign(payload);
    return { accessToken: token };
  }

  async register(data: { email: string; password: string }) {
    const email = data.email;
    const userIsRegistered = await this.prisma.user.findUnique({
      where: { email },
    });
    if (userIsRegistered) {
      throw new UnauthorizedException('User already exist');
    }
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password_hash: hashed,
      },
    });
    return this.login(user);
  }

  logout() {
    // uniewaznić token - blacklista
    return true;
  }
}
