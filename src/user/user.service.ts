import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { users } from 'src/db/db';


@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto.login, createUserDto.password);
    users.push(user);
    return user;
  }

  findAll() {
    return users;
  }

  findOne(id: string) {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }

    if (user.password !== updateUserDto.oldPassword) {
      throw new ForbiddenException();
    }

    user.password = updateUserDto.newPassword;
    user.updatedAt = Date.now();
    user.version++;

    return user;
  }

  remove(id: string) {
    const index = users.findIndex((user) => user.id === id);
    if (index == -1) {
      throw new NotFoundException();
    }
    users.splice(index, 1);

    return this.findAll();
  }
}
