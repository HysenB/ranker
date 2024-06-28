import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(
        private readonly prismaService: PrismaService
    ) { }

    private selectUser = {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        schoolId: true,
    }


    async updateUser(id: string, body: UpdateUserDTO) {
        try {
            const user = await this.prismaService.user.update({
                where: {
                    id,
                },
                data: {
                    ...body
                }
            })
        } catch (error) {
            throw error;

        }
    }

    async getUserById(id: string) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id
                },
                select: this.selectUser
            });
            return user;
        } catch (error) {
            throw error;

        }
    }
    async deleteUser(id: string) {
        try {
            await this.prismaService.user.delete({
                where: {
                    id
                }
            })
        } catch (error) {
            throw error;

        }
    }

    async createUser(body: CreateUserDTO) {
        try {
            const user = await this.prismaService.user.create({
                data: {
                    ...body
                }
            })
        } catch (error) {
            throw error;
        }
    }
    async getAllUsers(name: string) {
        try {
            let where: any = {};

            if (name?.length) {
                where.firstName = name;
            }
            console.log({ where })
            const selectUsers = { ...this.selectUser };
            delete selectUsers.schoolId;
            const users = await this.prismaService.user.findMany({
                where,
                select: selectUsers,
                orderBy: {
                    firstName: 'asc'
                }
            });
            return users;
        } catch (error) {
            throw error;

        }
    }


}
