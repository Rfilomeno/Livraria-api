import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IUsersService } from '../Interfaces/users.service.interface';
import { CreateUserDto } from '../Models/dto/create-user.dto';
import { UserDto } from '../Models/dto/user.dto';
import { UpdateUserDto } from '../Models/dto/update-user.dto';
import { User } from '../Models/user.model';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectModel(User)
    private repository: typeof User,
  ) {}

  async getAll(): Promise<UserDto[]> {
    return this.repository.findAll();
  }

  async getById(id: number): Promise<UserDto> {
    return this.repository.findByPk(id);
  }

  async create(user: CreateUserDto): Promise<UserDto> {
    return this.repository.create({ ...user });
  }

  async update(id: string, user: UpdateUserDto): Promise<[number, UserDto[]]> {
    return this.repository.update(
      { ...user },
      {
        where: {
          id: id,
        },
      },
    );
  }

  async delete(id: number) {
    this.repository.destroy({
      where: {
        id: id,
      },
    });
  }
}
