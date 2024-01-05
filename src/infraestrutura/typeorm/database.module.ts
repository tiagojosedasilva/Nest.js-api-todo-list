import { Module } from "@nestjs/common";
import { databaseProvider } from "./database.providers";

@Module({
    imports: [],
    providers: [...databaseProvider],
    exports: [...databaseProvider]
})
export class DataBaseModule{}