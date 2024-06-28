import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSchoolDTO } from './dto/update-school.dto';
import { CreateSchoolDTO } from './dto/create-school.dto';

@Injectable()
export class SchoolsService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    private selectSchool = {
        id: true,
        name: true,
        yearCreated: true,
    }


    async updateSchool(id: string, body: UpdateSchoolDTO) {
        try {
            const school = await this.prismaService.school.update({
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

    async getSchoolById(id: string) {
        try {
            const school = await this.prismaService.school.findFirst({
                where: {
                    id
                },
                select: this.selectSchool
            });
            return school;
        } catch (error) {
            throw error;

        }
    }
    async deleteSchool(id: string) {
        try {
            await this.prismaService.school.delete({
                where: {
                    id
                }
            })
        } catch (error) {
            throw error;

        }
    }

    async createSchool(body: CreateSchoolDTO) {
        try {
            const school = await this.prismaService.school.create({
                data: {
                    ...body
                }
            })
        } catch (error) {
            throw error;
        }
    }
    async getAllSchools() {
        try {
            const schools = await this.prismaService.school.findMany({
                select: this.selectSchool
            });
            return schools;
        } catch (error) {
            throw error;

        }
    }
}
