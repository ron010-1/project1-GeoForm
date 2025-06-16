import {
  IsString
} from 'class-validator';

export class EditReportDto {
  @IsString()
  status: 'pending' | 'in_progress' | 'resolved';
}
