import { Support } from 'src/supports/entity/support.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
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

  @Column({ default: 'pending' })
  status: 'pending' | 'in_progress' | 'resolved';

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @Column('text', { array: true, nullable: true})
  imageUrl?: string[] | null;

  @Column({ default: 0 })
  suportCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Support, (support) => support.report)
  supports: Support[];
}
