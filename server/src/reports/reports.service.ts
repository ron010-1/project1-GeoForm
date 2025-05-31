import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './entity/report.entity';
import { randomUUID } from 'crypto';
@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportRepository.create(createReportDto);
    const data = {
      ...report,
      id: randomUUID(),
    }
    return this.reportRepository.save(data);
  };
  
  async findAllPaginated(page = 1, limit = 10) {
    const [data, total] = await this.reportRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
  

};

