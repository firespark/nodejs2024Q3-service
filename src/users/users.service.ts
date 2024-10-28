import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users, User } from 'src/db/users';
import { validate } from 'uuid';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    if (!createUserDto.login || !createUserDto.password) {
      throw new BadRequestException();
    }
    const user = new User(createUserDto.login, createUserDto.password);
    users.push(user);
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  findAll() {
    const allUsers = [];
    users.forEach(user => {
      allUsers.push(
        {
          id: user.id,
          login: user.login,
          version: user.version,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        }
      );
    });
    return allUsers;
  }

  findOne(id: string) {
    if (!validate(id)) {
      throw new BadRequestException();
    }
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    if (!validate(id)) {
      throw new BadRequestException();
    }
    if (!updateUserDto.oldPassword || !updateUserDto.newPassword) {
      throw new BadRequestException();
    }
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

    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  remove(id: string) {
    if (!validate(id)) {
      throw new BadRequestException();
    }
    const index = users.findIndex((user) => user.id === id);
    if (index == -1) {
      throw new NotFoundException();
    }
    users.splice(index, 1);

    return this.findAll();
  }
}
