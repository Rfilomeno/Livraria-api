import { CreateUserDto } from '../Models/dto/create-user.dto';
import { UpdateUserDto } from '../Models/dto/update-user.dto';
import { UserDto } from '../Models/dto/user.dto';

export interface IUsersService {
  getAll(): Promise<UserDto[]>;
  getById(id: number): Promise<UserDto>;
  create(livro: CreateUserDto): Promise<UserDto>;
  update(id: string, livro: UpdateUserDto): Promise<[number, UserDto[]]>;
  delete(id: number);
}
