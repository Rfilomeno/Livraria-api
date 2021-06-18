import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmprestimoDto } from '../Models/dto/emprestimos.dto';
import { EmprestimoPublisherService } from './Publisher/emprestimo.publisher.service';

@ApiTags('Emprestimo')
@Controller('emprestimo')
@UseInterceptors(ClassSerializerInterceptor)
export class EmprestimosController {
  constructor(private readonly publisherService: EmprestimoPublisherService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cria/cadastra um usuário',
    type: EmprestimoDto,
  })
  async create(@Body() emprestimo: EmprestimoDto) {
    this.publisherService.publish(emprestimo);
  }
}
