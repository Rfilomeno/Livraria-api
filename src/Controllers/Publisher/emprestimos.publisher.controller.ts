import { Controller, Post } from '@nestjs/common';
import { Emprestimo } from '../../Models/emprestimo.model';
import { EmprestimoPublisherService } from './emprestimo.publisher.service';

@Controller()
export class PublisherController {
  constructor(private readonly publisherService: EmprestimoPublisherService) {}

  @Post()
  publishNewGame(emprestimo: Emprestimo): { result: { success: boolean } } {
    const result = this.publisherService.publish(emprestimo);
    return {
      result,
    };
  }
}
