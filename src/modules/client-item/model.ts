import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class ClientItem {
  @PrimaryColumn({ name: "CODPRD" })
  id!: number;

  @Column({ name: "DESCPROD" })
  name!: string;

  @Column({ name: "VLRCOMERC" })
  value!: string;

  @Column({ name: "CORDPARC" })
  codpar!: number;
}
