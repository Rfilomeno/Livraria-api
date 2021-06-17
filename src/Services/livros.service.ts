import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ILivrosService } from '../Interfaces/livros.service.interface';
import { CreateLivroDto } from '../Models/dto/create-livro.dto';
import { LivroDto } from '../Models/dto/livros.dto';
import { UpdateLivroDto } from '../Models/dto/update-livros.dto';
import { Livro } from '../Models/livro.model';

@Injectable()
export class LivrosService implements ILivrosService {
  constructor(
    @InjectModel(Livro)
    private repository: typeof Livro,
  ) {}

  async getAll(): Promise<LivroDto[]> {
    return this.repository.findAll();
  }

  async getById(id: number): Promise<LivroDto> {
    return this.repository.findByPk(id);
  }

  async create(livro: CreateLivroDto): Promise<LivroDto> {
    return this.repository.create({ ...livro });
  }

  async update(
    id: string,
    livro: UpdateLivroDto,
  ): Promise<[number, LivroDto[]]> {
    return this.repository.update(
      { ...livro },
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
