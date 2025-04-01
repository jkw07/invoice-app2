import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CompanyModule } from './company/company.module';
import { ClientModule } from './client/client.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PaymentModule } from './payment/payment.module';
import { SettingModule } from './setting/setting.module';
import { ProductModule } from './product/product.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
      playground: true,
      introspection: true,
    }),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      isGlobal: true,
      port: 6379,
      ttl: 300, // domyślny czas życia (w sekundach)
    }),
    PrismaModule,
    AuthModule,
    InvoiceModule,
    CompanyModule,
    ClientModule,
    PaymentModule,
    SettingModule,
    ProductModule,
  ],
})
export class AppModule {}
