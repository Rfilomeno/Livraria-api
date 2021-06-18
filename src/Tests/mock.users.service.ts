import { Injectable } from '@nestjs/common';
import { UserDto } from '../Models/dto/user.dto';
import { CreateUserDto } from '../Models/dto/create-user.dto';
import { UpdateUserDto } from '../Models/dto/update-user.dto';

@Injectable()
export class MockUsersService {
  private user: UserDto = {
    id: '1',
    nome: 'Rodrigo Filomeno',
    cpf: '123.456.789-00',
  };
  private result = new Promise<UserDto>((resolve, reject) => {
    resolve(this.user);
    reject();
  });
  private resultArray = new Promise<UserDto[]>((resolve, reject) => {
    resolve([this.user]);
    reject();
  });
  private stopWarnings = 'no warnings';
  create(user: CreateUserDto): Promise<UserDto> {
    this.stopWarnings = JSON.stringify(user);
    return this.result;
  }
  getAll(): Promise<UserDto[]> {
    return this.resultArray;
  }

  getById(id: string): Promise<UserDto> {
    this.stopWarnings = JSON.stringify(id);
    return this.result;
  }
  update(id: string, user: UpdateUserDto): Promise<[number, UserDto[]]> {
    this.stopWarnings = JSON.stringify(user) + JSON.stringify(id);
    const result = new Promise<[number, UserDto[]]>((resolve, reject) => {
      resolve([1, [this.user]]);
      reject();
    });
    return result;
  }
  delete(id: number) {
    this.stopWarnings = JSON.stringify(id);
    this.stopWarnings = 'no warnings';
  }
}
