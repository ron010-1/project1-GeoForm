import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';

export class CreateReportDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  ip: string;

  @IsString()
  nameUser: string;

  @IsNumber()
  latitudeUser: number;

  @IsNumber()
  longitudeUser: number;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsArray()
  @IsOptional()
  imageUrl?: string[];
}
