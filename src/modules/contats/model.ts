import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "TGFCTT" })
export class Contat {
  @PrimaryColumn({ name: "CODPARC" })
  codparc!: number;

  @PrimaryColumn({ name: "CODCONTATO" })
  codcontato!: number;

  @Column({ name: "NOMECONTATO", nullable: true })
  nomecontato?: string | null;

  @Column({ name: "APELIDO", nullable: true })
  apelido?: string | null;

  @Column({ name: "CARGO", nullable: true })
  cargo?: string | null;

  @Column({ name: "CODEND", nullable: true })
  codend?: number | null;

  @Column({ name: "NUMEND", nullable: true })
  numend?: string | null;

  @Column({ name: "COMPLEMENTO", nullable: true })
  complemento?: string | null;

  @Column({ name: "CODBAI", nullable: true })
  codbai?: number | null;

  @Column({ name: "CODCID", nullable: true })
  codcid?: number | null;

  @Column({ name: "CEP", nullable: true })
  cep?: string | null;

  @Column({ name: "TELEFONE", nullable: true })
  telefone?: string | null;

  @Column({ name: "RAMAL", nullable: true })
  ramal?: number | null;

  @Column({ name: "FAX", nullable: true })
  fax?: string | null;

  @Column({ name: "EMAIL", nullable: true })
  email?: string | null;

  @Column({ name: "DTNASC", type: "date", nullable: true })
  dtnasc?: Date | null;

  @Column({ name: "CPF", nullable: true })
  cpf?: string | null;

  @Column({ name: "PRIORIDADE", nullable: true })
  prioridade?: number | null;

  @Column({ name: "ATIVO" })
  ativo!: string;

  @Column({ name: "DTCAD", type: "date", nullable: true })
  dtcad?: Date | null;

  @Column({ name: "CELULAR", nullable: true })
  celular?: string | null;

  @Column({ name: "CNPJ", nullable: true })
  cnpj?: string | null;

  @Column({ name: "CODPARCCAD" })
  codparccad!: number;

  @Column({ name: "TELRESID", nullable: true })
  telresid?: string | null;

  @Column({ name: "POSSUIACESSOBT" })
  possuiacessobt!: string;

  @Column({ name: "SENHABT", nullable: true })
  senhabt?: string | null;

  @Column({ name: "SENHAACESSO", nullable: true })
  senhaacesso?: string | null;

  @Column({ name: "CODUSU", nullable: true })
  codusu?: number | null;

  @Column({ name: "NIVELCOB" })
  nivelcob!: number;

  @Column({ name: "RECEBEBOLETOEMAIL" })
  recebeBoletoEmail!: string;

  @Column({ name: "RECEBENOTAEMAIL" })
  recebeNotaEmail!: string;

  @Column({ name: "SOCIO" })
  socio!: string;

  @Column({ name: "LATITUDE", nullable: true })
  latitude?: string | null;

  @Column({ name: "LONGITUDE", nullable: true })
  longitude?: string | null;

  @Column({ name: "CODREG", nullable: true })
  codreg?: number | null;

  @Column({ name: "RECEMAILIMPPED" })
  recemailimpped!: string;

  @Column({ name: "EMAILRECBOL" })
  emailrecbol!: string;

  @Column({ name: "HABPLANENTCESTAS", nullable: true })
  habplanentcestas?: string | null;

  @Column({ name: "QTDENTREGACESTAS", nullable: true })
  qtdentregacestas?: number | null;

  @Column({ name: "ENVIANOTIFCOTA" })
  envianotifcota!: string;

  @Column({ name: "RESPCOBRANCA", nullable: true })
  respcobranca?: string | null;

  @Column({ name: "INSCESTAD", nullable: true })
  inscestad?: string | null;

  @Column({ name: "TIMPROFISSAO", nullable: true })
  timprofissao?: number | null;

  @Column({ name: "TIMAGENCIA", nullable: true })
  timagencia?: string | null;

  @Column({ name: "TIMCONTA", nullable: true })
  timconta?: string | null;

  @Column({ name: "TIMBANCO", nullable: true })
  timbanco?: number | null;

  @Column({ name: "TIMTIPO", nullable: true })
  timtipo?: number | null;

  @Column({ name: "TIMRG", nullable: true })
  timrg?: string | null;

  @Column({ name: "TIMBENEFICIARIO", nullable: true })
  timbeneficiario?: string | null;

  @Column({ name: "TIMNACIONALIDAD", nullable: true })
  timnacionalidad?: number | null;

  @Column({ name: "TIMPROCURADOR", nullable: true })
  timprocurador?: number | null;

  @Column({ name: "TIMREPRESENTANTE", nullable: true })
  timrepresentante?: string | null;

  @Column({ name: "DHALTER", type: "date", nullable: true })
  dhalter?: Date | null;

  @Column({ name: "CODUSUALT", nullable: true })
  codusualt?: number | null;
}
