import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './Models/livro.model';
import { LivrosController } from './Controllers/livros.controller';
import { LivrosService } from './Services/livros.service';
import { UsersController } from './Controllers/users.controller';
import { UsersService } from './Services/users.service';
import { EmprestimosController } from './Controllers/emprestimos.controller';
import { EmprestimoPublisherService } from './Controllers/Publisher/emprestimo.publisher.service';
import { EVENT_HUB } from './Controllers/Publisher/nats.type';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { User } from './Models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.production.env'],
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [LivrosController, UsersController, EmprestimosController],
  providers: [
    LivrosService,
    UsersService,
    EmprestimoPublisherService,
    {
      provide: 'ILivrosService',
      useClass: LivrosService,
    },
    {
      provide: 'IUsersService',
      useClass: UsersService,
    },
    {
      provide: EVENT_HUB,
      useValue: ClientProxyFactory.create({
        transport: Transport.TCP,
      }),
    },
  ],
})
export class AppModule {}
