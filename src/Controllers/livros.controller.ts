import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ILivrosService } from '../Interfaces/livros.service.interface';
import { LivroDto } from '../Models/dto/livros.dto';
import { Livro } from '../Models/livro.model';

@ApiTags('Livros')
@Controller('livros')
@UseInterceptors(ClassSerializerInterceptor)
export class LivrosController {
  constructor(
    @Inject('ILivrosService')
    private livrosService: ILivrosService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os livros',
    type: [LivroDto],
  })
  async getAll(): Promise<LivroDto[]> {
    return this.livrosService.getAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna o livro encontrado',
    type: LivroDto,
  })
  async getById(@Param() params): Promise<LivroDto> {
    return this.livrosService.getById(params.id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cria/cadastra um livro',
    type: LivroDto,
  })
  async create(@Body() livro: LivroDto) {
    return this.livrosService.create(livro);
  }

  @Put()
  @ApiResponse({
    status: 200,
    description: 'Atualiza dados de um livro',
    type: LivroDto,
  })
  async update(@Body() livro: Livro): Promise<[number, LivroDto[]]> {
    return this.livrosService.update(livro.id, livro);
  }
  //todo pesquisar httpcode
  @ApiNoContentResponse({ status: 200, description: 'Apaga um livro' })
  @Delete(':id')
  async delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
