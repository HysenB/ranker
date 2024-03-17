import { Body, Controller, Post } from "@nestjs/common";
import { CreatePollDto, JoinPollDto } from "./dto";
import { PollsService } from "./polls.service";


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

    @Post('/rejoin')
    async rejoin() {
        const result = await this.pollsSerivce.rejoinPoll({
            name: 'From token',
            pollID: 'From token',
            userID: 'From token',
        });
        return result;
    }
}