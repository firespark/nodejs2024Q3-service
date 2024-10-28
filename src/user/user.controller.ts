import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUIDvalidate } from 'src/UUID.validator';

@UseInterceptors(ClassSerializerInterceptor)

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', UUIDvalidate) id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @HttpCode(200)
  update(@Param('id', UUIDvalidate) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', UUIDvalidate) id: string) {
    return this.usersService.remove(id);
  }
}
