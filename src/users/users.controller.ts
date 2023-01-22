import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'

@Controller('users')
export class UsersController {
    @ApiTags('users')
    @Get('/@:username')
    getUserbyUserName(@Param('username') username:string):string{
        return `Fetching Details of User ${username}`
    }

    @Get('/:userid')
    getUserByUserId(@Param('userid') userid:string):string{
        return `Fetching details Of User id = ${userid}`
    }

    @Post('/')
    createNewUser(@Body() userBody):string{
        return ''
    }

    @Delete('/:userid/follow')
    unfollowUser():string{
        return ''
    }

    @Patch('/:userid')
    updateUserDetails():string{
        return ''
    }

    @Get('/:userid/followers')
    getuserFollowers(@Param('userid') userid:string):string{
        return ''
    }

    @Put('/:userid/followees')
    addUserFollowers(@Param('userid') userid:string):string{
        return ''
    }
}
