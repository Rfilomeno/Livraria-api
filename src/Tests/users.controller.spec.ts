import { Test, TestingModule } from '@nestjs/testing';
import { UserDto } from '../Models/dto/user.dto';
import { UsersController } from '../controllers/users.controller';
import { MockUsersService } from './mock.users.service';
import { User } from 'src/Models/user.model';

describe('AppController', () => {
  let usersController: UsersController;
  let usersService: MockUsersService;
  const user: UserDto = {
    id: '1',
    nome: 'Rodrigo Filomeno',
    cpf: '123.456.789-00',
  };
  const result = new Promise<UserDto>((resolve, reject) => {
    resolve(user);
    reject();
  });
  const resultArray = new Promise<UserDto[]>((resolve, reject) => {
    resolve([user]);
    reject();
  });
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [
        {
          provide: 'IUsersService',
          useClass: MockUsersService,
        },
        MockUsersService,
      ],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<MockUsersService>(MockUsersService);
  });

  describe('UsersController', () => {
    it('should create user', async () => {
      jest.spyOn(usersService, 'create').mockImplementation(() => result);
      expect(usersController.create(user)).toStrictEqual(result);
    });

    it('should return an Array of users', async () => {
      jest.spyOn(usersService, 'getAll').mockImplementation(() => resultArray);
      expect(usersController.getAll()).toStrictEqual(resultArray);
    });

    it('should return a user', async () => {
      jest.spyOn(usersService, 'getById').mockImplementation(() => result);
      expect(usersController.getById('1')).toStrictEqual(result);
    });

    it('should update a user', async () => {
      const resultUpdate = new Promise<[number, UserDto[]]>(
        (resolve, reject) => {
          resolve([1, [user]]);
          reject();
        },
      );
      jest.spyOn(usersService, 'update').mockImplementation(() => resultUpdate);
      expect(usersController.update(user as User)).toStrictEqual(resultUpdate);
    });
    it('should delete a user', async () => {
      const resultDelete: Promise<void> = new Promise((resolve, reject) => {
        resolve();
        reject();
      });
      jest.spyOn(usersService, 'delete').mockImplementation();
      expect(usersController.delete('1')).toStrictEqual(resultDelete);
    });
  });
});
