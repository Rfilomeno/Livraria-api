import { Table, Model } from 'sequelize-typescript';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
@Table
export class Emprestimo extends Model {
  @Expose()
  @ApiProperty({ example: '1', description: 'Identificador do emprestimo' })
  id: string;

  @ApiProperty({
    example: 'ISBN 978-8576082675',
    description: 'Código ISBN do livro emprestado',
  })
  @Expose()
  codigoLivro: string;

  @ApiProperty({
    example: 'Código Limpo',
    description: 'Nome do livro emprestado',
  })
  @Expose()
  nomeLivro: string;

  @ApiProperty({
    example: 'Rodrigo Filomeno',
    description: 'Nome do usuário que pegou o emprestimo',
  })
  @Expose()
  nomeUsuario: string;

  @ApiProperty({
    example: '1',
    description: 'id do usuário que pegou o emprestimo',
  })
  @Expose()
  idUsuario: string;

  @ApiProperty({
    example: '123.456.789-00',
    description: 'cpf do usuário que pegou o emprestimo',
  })
  @Expose()
  cpfUsuario: string;
}
