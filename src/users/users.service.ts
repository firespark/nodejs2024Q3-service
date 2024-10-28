import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users, User } from 'src/db/users';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
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
    const user = users.find(user => user.id === id);
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = users.find(user => user.id === id);
    if (user.password === updateUserDto.oldPassword) {
      user.password = updateUserDto.newPassword;
      user.updatedAt = Date.now();
      user.version ++;
    }
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  remove(id: string) {
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);

    return this.findAll();
  }
}
