import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './entity/report.entity';
import { randomUUID } from 'crypto';
import { EditReportDto } from './dto/edit-report.dto';
import { Supervisor } from 'src/supervisor/entity/supervisor.entity';
@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    // Pega o supervisor com menos reports (assumindo que 'report_count' é uma coluna atualizada pelo trigger)
    const supervisor = await this.dataSource
      .getRepository(Supervisor)
      .createQueryBuilder('supervisor')
      .orderBy('supervisor.report_count', 'ASC')
      .getOne();

    if (!supervisor) {
      throw new Error('Nenhum supervisor disponível');
    }

    const report = this.reportRepository.create({
      ...createReportDto,
      id: randomUUID(),
      supervisor: supervisor,
    });

    // Salva o report; o trigger atualiza o contador no supervisor automaticamente
    return this.reportRepository.save(report);
  }

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

  async getById(id: string) {
    const data = await this.reportRepository.findOne({
      where: { id: id },
    });

    return data;
  }

  async editById(id: string, editReport: EditReportDto) {
    const data = await this.reportRepository.findOne({
      where: { id: id },
    });

    const edited = {
      ...data,
      status: editReport.status,
    };

    await this.reportRepository.update(id, edited);

    return this.reportRepository.findOne({ where: { id } });
  }

  async getBySupervisorId(id: string, page = 1, limit = 10) {
    const [data, total] = await this.reportRepository.findAndCount({
      where: {supervisor_id : id},
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
}
