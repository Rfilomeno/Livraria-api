import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
@Table
export class User extends Model {
  @Expose()
  @ApiProperty({ example: '1', description: 'Identificador do usuário' })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: 'Rodrigo Filomeno', description: 'Nome do usuário' })
  @Expose()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @ApiProperty({ example: '123.456.789-00', description: 'cpf do usuário' })
  @Expose()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf: string;
}
