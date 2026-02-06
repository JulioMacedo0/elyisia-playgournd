import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "VW_ITCLI_PORTAL_CLIENTES" })
export class ClientItem {
  @PrimaryColumn({ name: "CODPROD" })
  id!: number;

  @Column({ name: "DESCRPROD" })
  name!: string;

  @Column({ name: "IMAGEM", type: "blob" })
  image!: Buffer;

  // @Column({ name: "VLRCOMERC" })
  // value!: string;

  @Column({ name: "CODPARC" })
  codpar!: number;
}
