import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UpdateSchoolDTO } from './dto/update-school.dto';
import { CreateSchoolDTO } from './dto/create-school.dto';
import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {

    constructor(private readonly schoolsService: SchoolsService) { }

    @Patch(':id')
    updateSchool(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateSchoolDTO) {
        return this.schoolsService.updateSchool(id, body);
    }

    @Get(':id')
    getSchoolById(@Param('id', ParseUUIDPipe) id: string) {
        return this.schoolsService.getSchoolById(id);
    }

    @Delete(':id')
    deleteSchool(@Param('id') id: string) {
        return this.schoolsService.deleteSchool(id);
    }

    @Post()
    createSchool(@Body() createSchoolDto: CreateSchoolDTO) {
        return this.schoolsService.createSchool(createSchoolDto);
    }

    @Get()
    getAllSchools() {
        return this.schoolsService.getAllSchools();
    }
}
