import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @ApiProperty({ example: '1', description: 'Identificador do usuário' })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Rodrigo Filomeno', description: 'Nome do usuário' })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123.456.789-00', description: 'cpf do usuário' })
  cpf: string;
}
