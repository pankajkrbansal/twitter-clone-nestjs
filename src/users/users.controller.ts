import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @ApiTags('users')
    @Get('/@:username')
    async getUserbyUserName(@Param('username') username:string):Promise<UserEntity>{
        // return `Fetching Details of User ${username}`
        let user = await this.userService.getUserbyUserName(username);
        if(!user){
            throw new Error("User not found");
        }
        return user; 
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
