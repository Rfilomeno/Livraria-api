import { Test, TestingModule } from '@nestjs/testing';
import { LivroDto } from '../Models/dto/livros.dto';
import { LivrosController } from '../controllers/livros.controller';
import { MockLivrosService } from './mock.livros.service';

describe('AppController', () => {
  let livrosController: LivrosController;
  let livrosService: MockLivrosService;
  const livro: LivroDto = {
    id: '1',
    codigo: 'ISBN 978-8576082675',
    nome: 'Código limpo',
    preco: 70.99,
  };
  const result = new Promise<LivroDto>((resolve, reject) => {
    resolve(livro);
  });
  const resultArray = new Promise<LivroDto[]>((resolve, reject) => {
    resolve([livro]);
  });
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [LivrosController],
      providers: [
        {
          provide: 'ITournamentsService',
          useClass: MockLivrosService,
        },
        MockLivrosService,
      ],
    }).compile();

    livrosController = app.get<LivrosController>(LivrosController);
    livrosService = app.get<MockLivrosService>(MockLivrosService);
  });

  describe('TournamentsController', () => {
    it('should create livro', async () => {
      jest.spyOn(livrosService, 'create').mockImplementation(() => result);
      expect(livrosController.create(livro)).toStrictEqual(result);
    });

    it('should return an Array of livros', async () => {
      jest
        .spyOn(livrosService, 'findAll')
        .mockImplementation(() => resultArray);
      expect(livrosController.getAll()).toStrictEqual(resultArray);
    });

    it('should return a livro', async () => {
      jest.spyOn(livrosService, 'findOne').mockImplementation(() => result);
      expect(livrosController.getById('1')).toStrictEqual(result);
    });
  });
});
