import { IsEmail, IsNotEmpty, isNumber, IsString, ValidateIf } from "class-validator";

export class UpdateSchoolDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    yearCreated: number;
}