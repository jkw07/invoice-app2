import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { InvoiceModule } from './modules/invoice.module';
import { CompanyModule } from './modules/company.module';
import { ClientModule } from './modules/client.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PaymentModule } from './modules/payment.module';
import { SettingModule } from './modules/setting.module';
import { ProductModule } from './modules/product.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';
import { UserModule } from './modules/user.module';
import { VatModule } from './modules/vat.module';

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
      ttl: 300,
    }),
    PrismaModule,
    AuthModule,
    InvoiceModule,
    CompanyModule,
    ClientModule,
    PaymentModule,
    SettingModule,
    ProductModule,
    UserModule,
    VatModule,
  ],
})
export class AppModule {}
