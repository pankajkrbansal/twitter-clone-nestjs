import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtag')
export class HashtagController {
    @Get('/')
    getHashTag():string{
        return "HashTag"
    }

    @Get('/:hashtag/posts')
    getPostForHashtag(@Param() param):string{
        return `Showing all post regarding ${param.hashtag}`; 
    }
}
