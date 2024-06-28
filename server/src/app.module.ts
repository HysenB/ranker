import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsModule } from './polls/polls.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolsController } from './schools/schools.controller';
import { SchoolsService } from './schools/schools.service';

@Module({
  imports: [ConfigModule.forRoot(), PollsModule, UsersModule, PrismaModule],
  controllers: [UsersController, SchoolsController],
  providers: [UsersService, SchoolsService],
})
export class AppModule { }
