import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/@:username')
    getUserbyUserName(@Param() param):string{
        return `Fetching Details of User ${param.username}`
    }

    @Get('/:userid')
    getUserByUserId(@Param() param):string{
        return `Fetching details Of User id = ${param.userid}`
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
    getuserFollowers(@Param() param):string{
        return ''
    }

    @Put('/:userid/followees')
    addUserFollowers(@Param() param):string{
        return ''
    }
}
