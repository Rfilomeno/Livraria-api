import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { LivroDto } from 'src/Models/dto/livros.dto';
import { Livro } from '../Models/livro.model';
import { LivrosService } from '../Services/livros.service';

@ApiTags('Livros')
@Controller('livros')
@UseInterceptors(ClassSerializerInterceptor)
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<LivroDto[]> {
    return this.livrosService.getAll();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<LivroDto> {
    return this.livrosService.getById(params.id);
  }

  @Post()
  async criar(@Body() livro: LivroDto) {
    return this.livrosService.create(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<[number, LivroDto[]]> {
    return this.livrosService.update(livro.id, livro);
  }
  //todo pesquisar httpcode
  @ApiNoContentResponse()
  @Delete(':id')
  async apagar(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
