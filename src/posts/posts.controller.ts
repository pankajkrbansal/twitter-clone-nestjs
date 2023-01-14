import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return 'All Posts';
  }

  @Get('/:postid')
  getPostById(@Param() param):string{
    return ''
  }

  @Post('/')
  createNewPost() : string{
    return ''
  }

  @Delete('/:postid')
  deletebyId(@Param() param):string{
    return ''
  }

  @Put('/:postid/like')
  likePostById(@Param() param):string{
    return ''
  }

  @Put('/:postid/dislike')
  dislikePostById():string{
    return ''
  }
}
