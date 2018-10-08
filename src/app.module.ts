import { Module } from '@nestjs/common';
import { ProdutosController } from 'produtos/Controllers/produtos.controller';
import { ProdutosModule } from 'produtos/produtos.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [ProdutosModule, 
  MongooseModule.forRoot('mongodb://rafaela:rafa2018@ds225253.mlab.com:25253/ammo-varejo-teste')
  ],
  controllers: [ProdutosController]
})
export class AppModule {}
