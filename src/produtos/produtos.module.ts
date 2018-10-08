import { Module } from '@nestjs/common';
import { ProdutosController } from './Controllers/produtos.controller';
import { ProductService } from './services/produto.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ProductSchema } from './schemas/produto.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema}])],
    controllers: [ProdutosController],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProdutosModule {}
