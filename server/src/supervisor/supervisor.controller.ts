import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { CreateSupervisorDto } from './dto/create-supervisor.dto';
import { EditSupervisorDto } from './dto/edit-supervisor.dto';

@Controller('supervisors')
export class SupervisorController {
  constructor(private readonly appService: SupervisorService) {}

  @Get()
  async findAllPaginated(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.appService.findAllPaginated(Number(page), Number(limit));
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post()
  async createSupervisor(@Body() createSupervisor: CreateSupervisorDto) {
    return this.appService.createSupervisor(createSupervisor);
  }

  @Patch(':id')
  async editSupervisorById(
    @Param() id: string,
    @Body() editSupervisor: EditSupervisorDto,
  ) {
    return this.appService.editSupervisorById(id, editSupervisor);
  }
}
