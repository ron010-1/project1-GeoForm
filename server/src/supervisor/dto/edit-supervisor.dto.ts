import {
  IsString
} from 'class-validator';

export class EditSupervisorDto {
   @IsString()
    name: string;
  
    @IsString()
    phone: string;
}
