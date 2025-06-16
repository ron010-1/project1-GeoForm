import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';

export class EditReportDto {
  @IsString()
  status: 'pending' | 'in_progress' | 'resolved';
}
