import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
@Table
export class Livro extends Model {
  @Expose()
  @ApiProperty({ example: '1', description: 'Identificador do livro' })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: 'ISBN 978-8576082675',
    description: 'Código ISBN do livro',
  })
  @Expose()
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;

  @ApiProperty({ example: 'Código Limpo', description: 'Nome do livro' })
  @Expose()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @ApiProperty({ example: 70.99, description: 'Preço do livro' })
  @Expose()
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;
}
