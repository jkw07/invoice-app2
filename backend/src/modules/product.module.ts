import { Module } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductResolver } from '../resolvers/product.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { ProductRepository } from 'src/repositories/product.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [ProductService, ProductResolver, ProductRepository],
})
export class ProductModule {}
