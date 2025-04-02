import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User as PrismaUser } from '@prisma/client';

interface JwtPayload {
  sub: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  private createAccessToken(payload: JwtPayload): string {
    return this.jwt.sign(payload, {
      expiresIn: '1h',
    });
  }

  private createRefreshToken(payload: JwtPayload): string {
    return this.jwt.sign(payload, {
      expiresIn: '7d',
    });
  }

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
    return {
      accessToken: this.createAccessToken(payload),
      refreshToken: this.createRefreshToken(payload),
    };
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
  async refreshToken(oldRefreshToken: string) {
    try {
      const decoded = this.jwt.verify<JwtPayload>(oldRefreshToken, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user) throw new UnauthorizedException('Invalid token');

      return this.login(user);
    } catch {
      throw new UnauthorizedException('Token expired or invalid');
    }
  }
}
