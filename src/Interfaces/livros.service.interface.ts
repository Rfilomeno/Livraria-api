import { CreateLivroDto } from 'src/Models/dto/create-livro.det';
import { LivroDto } from 'src/Models/dto/livros.dto';
import { UpdateLivroDto } from 'src/Models/dto/update-livros.dto';

export interface ILivrosService {
  getAll(): Promise<LivroDto[]>;
  getById(id: number): Promise<LivroDto>;
  create(livro: CreateLivroDto): Promise<LivroDto>;
  update(id: string, livro: UpdateLivroDto): Promise<[number, LivroDto[]]>;
  delete(id: number);
}
