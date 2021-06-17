import { PickType } from '@nestjs/swagger';
import { LivroDto } from './livros.dto';

export class UpdateLivroDto extends PickType(LivroDto, ['preco'] as const) {}
