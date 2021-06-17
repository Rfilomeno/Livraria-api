import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
@Table
export class Livro extends Model {
  @Expose()
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @ApiProperty()
  @Expose()
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;

  @ApiProperty()
  @Expose()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @ApiProperty()
  @Expose()
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;
}
