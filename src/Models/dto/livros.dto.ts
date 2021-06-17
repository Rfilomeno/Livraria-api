import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LivroDto {
  @IsString()
  @ApiProperty({ example: '1', description: 'Identificador do livro' })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ISBN 978-8576082675',
    description: 'Código ISBN do livro',
  })
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Código Limpo', description: 'Nome do livro' })
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 70.99, description: 'Preço do livro' })
  preco: number;
}
