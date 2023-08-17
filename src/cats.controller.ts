import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { Request } from 'express';




@Controller('cats')
export class CatsController{

    @Get()
    async findAll(@Req() request: Request):  Promise<any[]> {
        console.log(request.body);
        return ['This action returns all cats'];
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
        }

    @Post()
    create():string{
        return 'This action adds a new cat';
    }
}