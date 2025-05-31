import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';

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

  @Post()
  create(@Body() createReportDto: CreateReportDto){
    return this.appService.create(createReportDto);
  };
}
