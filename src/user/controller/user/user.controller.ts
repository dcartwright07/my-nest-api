import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/service/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
