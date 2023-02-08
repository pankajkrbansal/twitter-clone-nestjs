import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepository])],
    // exports:[UserRepository],
    providers:[UsersService],
    controllers:[UsersController]})
export class UsersModule {}
