import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './files/files.module';
import { SitemapModule } from './sitemap/sitemap.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(`${process.env.DATABASE_URL}`),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    FilesModule,
    SitemapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
