import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LivroDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  preco: number;
}
