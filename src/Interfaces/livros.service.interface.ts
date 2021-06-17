import { CreateLivroDto } from '../Models/dto/create-livro.dto';
import { LivroDto } from '../Models/dto/livros.dto';
import { UpdateLivroDto } from '../Models/dto/update-livros.dto';

export interface ILivrosService {
  getAll(): Promise<LivroDto[]>;
  getById(id: number): Promise<LivroDto>;
  create(livro: CreateLivroDto): Promise<LivroDto>;
  update(id: string, livro: UpdateLivroDto): Promise<[number, LivroDto[]]>;
  delete(id: number);
}
