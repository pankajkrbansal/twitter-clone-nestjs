import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { HashtagController } from './hashtag/hashtag.controller';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'admin',
      database:'twitterDB',
      autoLoadEntities:true,
      synchronize:true
    })
  ],
  controllers: [AppController, UsersController, PostsController, HashtagController],
  providers: [AppService],
})
export class AppModule {}
