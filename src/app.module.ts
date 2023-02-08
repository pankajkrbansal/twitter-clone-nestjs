import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { HashtagController } from './hashtag/hashtag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { BaseEntity } from './common/base.entity';
import { PostEntity } from './posts/post.entity';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'twitterDB',
      entities: [UserEntity, BaseEntity, PostEntity],
      // autoLoadEntities:true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [
    AppController,
    PostsController,
    HashtagController,
  ],
  providers: [AppService],
})
export class AppModule {}
