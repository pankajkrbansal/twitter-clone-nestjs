import { Controller, Get, Param } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'

@Controller('hashtag')
export class HashtagController {
    
    @ApiTags('hashtag')
    @Get('/')
    getHashTag():string{
        return "HashTag"
    }

    @Get('/:hashtag/posts')
    getPostForHashtag(@Param('hashtag') hashtag:string):string{
        return `Showing all post regarding ${hashtag}`; 
    }
}
