import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EmprestimoDto } from 'src/Models/dto/emprestimos.dto';
import { EVENT_HUB } from './nats.type';

@Injectable()
export class EmprestimoPublisherService
  implements OnModuleInit, OnModuleDestroy
{
  constructor(@Inject(EVENT_HUB) private readonly client: ClientProxy) {}

  async onModuleInit(): Promise<void> {
    return this.client.connect();
  }

  onModuleDestroy(): void {
    return this.client.close();
  }
  @Post()
  publish(emprestimo: EmprestimoDto): { success: boolean } {
    this.client.emit('create_emprestimo', emprestimo);
    return {
      success: true,
    };
  }
}
