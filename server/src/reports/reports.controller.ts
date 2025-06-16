import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { EditReportDto } from './dto/edit-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly appService: ReportsService) {}

  @Get()
  async findAllPaginated(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return this.appService.findAllPaginated(
      Number(page),
      Number(limit),
    );
  };

  @Get(':id')
  async getById(@Param("id") id : string){
    return this.appService.getById(id);
  }

  @Post()
  create(@Body() createReportDto: CreateReportDto){
    return this.appService.create(createReportDto);
  };

  @Put(':id')
  async editById(@Param("id") id : string, @Body() editReport: EditReportDto){
    return this.appService.editById(id, editReport);
  };
}
