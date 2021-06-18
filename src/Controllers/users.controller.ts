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
import { UserDto } from '../Models/dto/user.dto';
import { IUsersService } from '../Interfaces/users.service.interface';
import { User } from '../Models/user.model';

@ApiTags('Users')
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(
    @Inject('IUsersService')
    private usersService: IUsersService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os usuários',
    type: [UserDto],
  })
  async getAll(): Promise<UserDto[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna o usuario encontrado',
    type: UserDto,
  })
  async getById(@Param() params): Promise<UserDto> {
    return this.usersService.getById(params.id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cria/cadastra um usuário',
    type: UserDto,
  })
  async create(@Body() user: UserDto) {
    return this.usersService.create(user);
  }

  @Put()
  @ApiResponse({
    status: 200,
    description: 'Atualiza dados de um usuário',
    type: UserDto,
  })
  async update(@Body() user: User): Promise<[number, UserDto[]]> {
    return this.usersService.update(user.id, user);
  }
  //todo pesquisar httpcode
  @ApiNoContentResponse({ status: 200, description: 'Apaga um usuário' })
  @Delete(':id')
  async delete(@Param() params) {
    this.usersService.delete(params.id);
  }
}
