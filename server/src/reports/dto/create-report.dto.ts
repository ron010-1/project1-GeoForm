import { IsString, IsNumber, IsOptional, IsArray, IsEnum } from 'class-validator';

export class CreateReportDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  nameUser: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsArray()
  @IsOptional()
  imageUrl?: string[];
}
