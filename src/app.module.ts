import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { HashtagController } from './hashtag/hashtag.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, PostsController, HashtagController],
  providers: [AppService],
})
export class AppModule {}
