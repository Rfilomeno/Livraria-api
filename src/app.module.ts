import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './Models/livro.model';
import { LivrosController } from './Controllers/livros.controller';
import { LivrosService } from './Services/livros.service';
import { UsersController } from './Controllers/users.controller';
import { UsersService } from './Services/users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [LivrosController, UsersController],
  providers: [
    LivrosService,
    UsersService,
    {
      provide: 'ILivrosService',
      useClass: LivrosService,
    },
    {
      provide: 'IUsersService',
      useClass: UsersService,
    },
  ],
})
export class AppModule {}
