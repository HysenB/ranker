import { IsEmail, IsNotEmpty, isNumber, IsString, ValidateIf } from "class-validator";

export class CreateSchoolDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    yearCreated: number;
}