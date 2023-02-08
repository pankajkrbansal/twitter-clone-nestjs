import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  public async getUserbyUserName(userName: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { username: userName } });
  }
}
