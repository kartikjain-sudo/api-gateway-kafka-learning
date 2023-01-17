import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderRequest {
    @IsNotEmpty()
    @IsString()
    readonly userId: string;
    
    @IsNotEmpty()
    @IsString()
    readonly description: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
}