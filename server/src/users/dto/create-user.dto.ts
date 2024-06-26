import { IsEmail, IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
    @ValidateIf((_, value) => {
        return value === null || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    })
    email: string;
}