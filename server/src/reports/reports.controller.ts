import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly appService: ReportsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() createReportDto: CreateReportDto){
    return this.appService.createReport(createReportDto);
  }
}
