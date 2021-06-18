import { Injectable } from '@nestjs/common';
import { LivroDto } from '../Models/dto/livros.dto';
import { CreateLivroDto } from '../Models/dto/create-livro.dto';
import { UpdateLivroDto } from 'src/Models/dto/update-livros.dto';

@Injectable()
export class MockLivrosService {
  private livro: LivroDto = {
    id: '1',
    codigo: 'ISBN 978-8576082675',
    nome: 'Código limpo',
    preco: 70.99,
  };
  private result = new Promise<LivroDto>((resolve, reject) => {
    resolve(this.livro);
  });
  private resultArray = new Promise<LivroDto[]>((resolve, reject) => {
    resolve([this.livro]);
  });

  create(tournament: CreateLivroDto): Promise<LivroDto> {
    return this.result;
  }
  getAll(): Promise<LivroDto[]> {
    return this.resultArray;
  }

  getById(id: string): Promise<LivroDto> {
    return this.result;
  }
  update(id: string, livro: UpdateLivroDto): Promise<[number, LivroDto[]]> {
    const result = new Promise<[number, LivroDto[]]>((resolve, reject) => {
      resolve([1, [this.livro]]);
    });
    return result;
  }
  delete(id: number) {}
}
