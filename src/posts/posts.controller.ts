import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'

@Controller('posts')
export class PostsController {
  @ApiTags('posts')
  @Get('/')
  getAllPosts(): string {
    return 'All Posts';
  }

  @Get('/:postid')
  getPostById(@Param('postid') postid:string):string{
    return ''
  }

  @Post('/')
  createNewPost() : string{
    return ''
  }

  @Delete('/:postid')
  deletebyId(@Param('postid') postid:string):string{
    return ''
  }

  @Put('/:postid/like')
  likePostById(@Param('postid') postid:string):string{
    return ''
  }

  @Put('/:postid/dislike')
  dislikePostById(@Param('postid') postid:string):string{
    return ''
  } 
}
