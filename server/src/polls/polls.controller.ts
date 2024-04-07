import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePollDto, JoinPollDto } from "./dto";
import { PollsService } from "./polls.service";
import { ControllerAuthGuard } from "./controller-auth.guard";
import { RequestWithAuth } from "./types";

@UsePipes(new ValidationPipe())
@Controller('polls')
export class PollsController {

    constructor(private pollsSerivce: PollsService) { }


    @Post()
    async create(@Body() createPollDto: CreatePollDto) {
        const result = await this.pollsSerivce.createPoll(createPollDto);
        return result;
    }

    @Post('join')
    async join(@Body() joinPollDto: JoinPollDto) {
        const result = await this.pollsSerivce.joinPoll(joinPollDto);
        return result;
    }

    @UseGuards(ControllerAuthGuard)
    @Post('/rejoin')
    async rejoin(@Req() request: RequestWithAuth) {
        const { userID, pollID, name } = request;
        const result = await this.pollsSerivce.rejoinPoll({
            name,
            pollID,
            userID,
        });
        return result;
    }
}