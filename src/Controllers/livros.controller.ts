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
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { ILivrosService } from '../Interfaces/livros.service.interface';
import { LivroDto } from '../Models/dto/livros.dto';
import { Livro } from '../Models/livro.model';

@ApiTags('Livros')
@Controller('livros')
@UseInterceptors(ClassSerializerInterceptor)
export class LivrosController {
  constructor(
    @Inject('ITournamentsService')
    private livrosService: ILivrosService,
  ) {}

  @Get()
  async getAll(): Promise<LivroDto[]> {
    return this.livrosService.getAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<LivroDto> {
    return this.livrosService.getById(params.id);
  }

  @Post()
  async create(@Body() livro: LivroDto) {
    return this.livrosService.create(livro);
  }

  @Put()
  async update(@Body() livro: Livro): Promise<[number, LivroDto[]]> {
    return this.livrosService.update(livro.id, livro);
  }
  //todo pesquisar httpcode
  @ApiNoContentResponse()
  @Delete(':id')
  async delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
