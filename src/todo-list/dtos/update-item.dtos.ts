import { CreateItemDto } from "./create-item.dtos";
import { PartialType } from '@nestjs/swagger';


export class UpdateItemDto extends PartialType(CreateItemDto){}
