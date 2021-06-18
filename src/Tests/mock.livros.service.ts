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
  private stopWarnings = '';
  private result = new Promise<LivroDto>((resolve, reject) => {
    resolve(this.livro);
    reject();
  });
  private resultArray = new Promise<LivroDto[]>((resolve, reject) => {
    resolve([this.livro]);
    reject();
  });

  create(livro: CreateLivroDto): Promise<LivroDto> {
    this.stopWarnings = JSON.stringify(livro);
    return this.result;
  }
  getAll(): Promise<LivroDto[]> {
    return this.resultArray;
  }

  getById(id: string): Promise<LivroDto> {
    this.stopWarnings = JSON.stringify(id);
    return this.result;
  }
  update(id: string, livro: UpdateLivroDto): Promise<[number, LivroDto[]]> {
    this.stopWarnings = JSON.stringify(livro);
    this.stopWarnings = JSON.stringify(id);
    const result = new Promise<[number, LivroDto[]]>((resolve, reject) => {
      resolve([1, [this.livro]]);
      reject();
    });
    return result;
  }
  delete(id: number) {
    this.stopWarnings = JSON.stringify(id);
    this.stopWarnings = 'no warnings';
    console.log(this.stopWarnings);
  }
}
