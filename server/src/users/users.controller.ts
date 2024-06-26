import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Patch(':id')
    updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateUserDTO) {
        return this.usersService.updateUser(id, body);
    }

    @Get(':id')
    getUserById(@Param('id', ParseUUIDPipe) id: string) {
        return this.usersService.getUserById(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDTO) {
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

}
