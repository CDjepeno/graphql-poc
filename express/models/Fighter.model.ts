import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer")
  hp: number;

  @Column("integer")
  cp: number;

  @Column("varchar", { unique: true })
  name: string;

  @Column("varchar")
  picture: string;

  @Column("varchar")
  types: string;
}
