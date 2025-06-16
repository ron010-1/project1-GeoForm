import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Report } from 'src/reports/entity/report.entity';

@Entity()
export class Support {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Report, report => report.supports, { onDelete: 'CASCADE' })
  report: Report;

  @Column()
  fingerprint: string;

  @CreateDateColumn()
  createdAt: Date;
}
