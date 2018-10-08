import {Get, Controller, Post, Body} from '@nestjs/common';
import { ProductModel } from '../models/produto.model';
import { ProductService } from '../services/produto.service';

@Controller ('produtos')
export class ProdutosController {
    constructor( private readonly service: ProductService) {
    }

    @Post()
    async create(@Body() model: ProductModel){
        this.service.create(model);
    }

    @Get()
    async get(): Promise <ProductModel[]>{
        return this.service.get();
    }
}