import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "VW_PERFIL_FIN_CLIENTES" })
export class FinancialProfile {
  @PrimaryColumn({ name: "Cod Parceiro" })
  codparc!: number;

  @Column({ name: "Nome Parceiro" })
  nomeparc!: string;

  @Column({ name: "Limite Credito" })
  limcred!: number;

  @Column({ name: "Saldo" })
  saldo!: number;

  @Column({ name: "Possui Vencido" })
  possuiVencido!: number;
}
