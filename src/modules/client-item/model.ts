import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "VW_ITCLI_PORTAL_CLIENTES" })
export class ClientItem {
  @PrimaryColumn({ name: "CODPROD" })
  id!: number;

  @Column({ name: "DESCRPROD" })
  name!: string;

  @Column({ name: "IMAGEM", type: "blob" })
  image!: Buffer;

  @Column({ name: "PRECO", type: "number" })
  value!: number;

  @Column({ name: "CODPARC" })
  codpar!: number;
}
