import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supervisor } from './entity/supervisor.entity';
import { SupervisorController } from './supervisor.controller';
import { SupervisorService } from './supervisor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supervisor])], 
  controllers: [SupervisorController], 
  providers: [SupervisorService], 
  exports: [SupervisorService], 
})
export class SupervisorModule {}
