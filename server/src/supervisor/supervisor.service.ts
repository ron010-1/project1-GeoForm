import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import { Supervisor } from './entity/supervisor.entity';
import { CreateSupervisorDto } from './dto/create-supervisor.dto';
import { EditSupervisorDto } from './dto/edit-supervisor.dto';

@Injectable()
export class SupervisorService {
  constructor(
    @InjectRepository(Supervisor)
    private readonly supervisorRepository: Repository<Supervisor>,
  ) {}

  async findAllPaginated(page = 1, limit = 10) {
    const [data, total] = await this.supervisorRepository.findAndCount({
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
    const data = await this.supervisorRepository.findOne({
      where: { id: id },
    });

    return data;
  }

  async createSupervisor(createSupervisor: CreateSupervisorDto) {
    const report = this.supervisorRepository.create(createSupervisor);

    const data = {
      ...report,
      id: randomUUID(),
    };

    return this.supervisorRepository.save(data);
  }

  async editSupervisorById(id: string, editSupervisor: EditSupervisorDto) {
    const data = await this.supervisorRepository.findOne({
      where: { id: id },
    });

    const edited = {
      ...data,
      name: editSupervisor.name,
      phone: editSupervisor.phone,
    };

    await this.supervisorRepository.update(id, edited);

    return this.supervisorRepository.findOne({ where: { id } });
  }
}
