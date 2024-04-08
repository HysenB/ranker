import { CanActivate, ExecutionContext, Logger } from "@nestjs/common";
import { PollsService } from "./polls.service";
import { JwtService } from "@nestjs/jwt";
import { AuthPayload, SocketWithAuth } from "./types";
import { WsUnauthorizedException } from "src/exceptions/ws-exceptions";


export class GatewayAdminGuard implements CanActivate {
    private readonly logger = new Logger(GatewayAdminGuard.name);

    constructor(
        private readonly pollsService: PollsService,
        private readonly jwtService: JwtService
    ) { }


    async canActivate(context: ExecutionContext): Promise<boolean> {
        // regular `Socket` from socket.io is probably sufficient
        const socket: SocketWithAuth = context.switchToWs().getClient();

        // for testing support, fallback to token header
        const token = socket.handshake.auth.token || socket.handshake.headers['token'];

        if (!token) {
            this.logger.error('No authorization token provided');

            throw new WsUnauthorizedException('No token provided');
        }

        try {
            const payload = this.jwtService.verify<AuthPayload & { sub: string }>(token);

            this.logger.debug(`Validation admion using token payload: ${payload}`);


            const { userID, pollID } = payload;

            const poll = await this.pollsService.getPoll(pollID);

            if (userID !== poll.adminID) {
                throw new WsUnauthorizedException('Admin privileges required');
            }

            return true;
        } catch {
            throw new WsUnauthorizedException('Admion privileges required');
        }
    }
}