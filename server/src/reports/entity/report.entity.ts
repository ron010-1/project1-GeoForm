import { Supervisor } from 'src/supervisor/entity/supervisor.entity';
import { Support } from 'src/supports/entity/support.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  nameUser: string;

  @Column({ type: 'varchar', default: '0.0.0.0' })
  ip: string;

  @Column({ type: 'double precision', nullable: true })
  latitudeUser: number;

  @Column({ type: 'double precision', nullable: true })
  longitudeUser: number;

  @Column({ default: 'pending' })
  status: 'pending' | 'in_progress' | 'resolved';

  @Column({ type: 'double precision', nullable: true })
  latitude: number;

  @Column({ type: 'double precision', nullable: true })
  longitude: number;

  @Column('text', { array: true, nullable: true })
  imageUrl?: string[] | null;

  @Column({ default: 0 })
  suportCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Support, (support) => support.report)
  supports: Support[];

  @ManyToOne(() => Supervisor, (supervisor) => supervisor.reports, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  supervisor: Supervisor;

  @Column({default: "f962ca6f-31ea-495b-a0d1-43621260ab48"})
  supervisor_id: string;
}
