import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CarrinhoModule } from './carrinho/carrinho.module';

@Module({
  imports: [ProdutosModule, CarrinhoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
