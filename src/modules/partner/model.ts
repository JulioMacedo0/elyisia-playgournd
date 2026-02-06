import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "TGFPAR" })
export class Partner {
  @PrimaryColumn({ name: "CODPARC" })
  id!: number;

  @Column({ name: "CODVEND" })
  codvend!: number;

  @Column({ name: "NOMEPARC" })
  nomeparc!: string;

  @Column({ name: "RAZAOSOCIAL", nullable: true })
  razaosocial?: string | null;

  @Column({ name: "TIPPESSOA" })
  tippessoa!: string;

  @Column({ name: "CODPARCMATRIZ", nullable: true })
  codparcmatriz?: number | null;

  @Column({ name: "CODEND" })
  codend!: number;

  @Column({ name: "NUMEND", nullable: true })
  numend?: string | null;

  @Column({ name: "COMPLEMENTO", nullable: true })
  complemento?: string | null;

  @Column({ name: "CODBAI" })
  codbai!: number;

  @Column({ name: "CODCID" })
  codcid!: number;

  @Column({ name: "CODREG" })
  codreg!: number;

  @Column({ name: "CEP", nullable: true })
  cep?: string | null;

  @Column({ name: "CAIXAPOSTAL", nullable: true })
  caixapostal?: string | null;

  @Column({ name: "TELEFONE", nullable: true })
  telefone?: string | null;

  @Column({ name: "RAMAL", nullable: true })
  ramal?: number | null;

  @Column({ name: "FAX", nullable: true })
  fax?: string | null;

  @Column({ name: "EMAIL", nullable: true })
  email?: string | null;

  @Column({ name: "DTCAD", type: "date" })
  dtcad!: Date;

  @Column({ name: "DTALTER", type: "date" })
  dtalter!: Date;

  @Column({ name: "DTNASC", type: "date", nullable: true })
  dtnasc?: Date | null;

  @Column({ name: "DTULTCONTATO", type: "date", nullable: true })
  dtultcontato?: Date | null;

  @Column({ name: "DTULTNEGOC", type: "date", nullable: true })
  dtultnegoc?: Date | null;

  @Column({ name: "IDENTINSCESTAD", nullable: true })
  identinscestad?: string | null;

  @Column({ name: "INSCESTADNAUF", nullable: true })
  inscestadnauf?: string | null;

  @Column({ name: "CGC_CPF", nullable: true })
  cgcCpf?: string | null;

  @Column({ name: "CODTAB", nullable: true })
  codtab?: number | null;

  @Column({ name: "PRAZOCONTATO", nullable: true })
  prazocontato?: number | null;

  @Column({ name: "PRAZOPAG", nullable: true })
  prazopag?: number | null;

  @Column({ name: "TOLERINADIMP", nullable: true })
  tolerinadimp?: number | null;

  @Column({ name: "CLIENTE" })
  cliente!: string;

  @Column({ name: "FORNECEDOR" })
  fornecedor!: string;

  @Column({ name: "TRANSPORTADORA" })
  transportadora!: string;

  @Column({ name: "VENDEDOR" })
  vendedor!: string;

  @Column({ name: "AGENCIA" })
  agencia!: string;

  @Column({ name: "CODTIPPARC" })
  codtipparc!: number;

  @Column({ name: "CODCTABCO", nullable: true })
  codctabco?: string | null;

  @Column({ name: "CODAGE", nullable: true })
  codage?: string | null;

  @Column({ name: "CODBCO" })
  codbco!: number;

  @Column({ name: "NOMEAGE", nullable: true })
  nomeage?: string | null;

  @Column({ name: "CODCTACTB", nullable: true })
  codctactb?: number | null;

  @Column({ name: "CODCTACTB2", nullable: true })
  codctactb2?: number | null;

  @Column({ name: "CLASSIFICMS", nullable: true })
  classificms?: string | null;

  @Column({ name: "TARE" })
  tare!: string;

  @Column({ name: "IPIINCICMS" })
  ipiincicms!: string;

  @Column({ name: "RETEMISS" })
  retemiss!: string;

  @Column({ name: "RETEMINSS" })
  reteminss!: string;

  @Column({ name: "CONTACESSO", nullable: true })
  contacesso?: string | null;

  @Column({ name: "SITUACAO", nullable: true })
  situacao?: string | null;

  @Column({ name: "OBSERVACOES", nullable: true })
  observacoes?: string | null;

  @Column({ name: "ATIVO" })
  ativo!: string;

  @Column({ name: "CODANT", nullable: true })
  codant?: number | null;

  @Column({ name: "CODCTABCOINT", nullable: true })
  codctabcoint?: number | null;

  @Column({ name: "GRUPOAUTOR", nullable: true })
  grupoautor?: string | null;

  @Column({ name: "LIMCRED", type: "float", nullable: true })
  limcred?: number | null;

  @Column({ name: "BLOQUEAR" })
  bloquear!: string;

  @Column({ name: "SELECIONADO", nullable: true })
  selecionado?: string | null;

  @Column({ name: "MOTBLOQ", nullable: true })
  motbloq?: string | null;

  @Column({ name: "EVENDA" })
  evenda!: string;

  @Column({ name: "ECOMPRA" })
  ecompra!: string;

  @Column({ name: "HOMEPAGE", nullable: true })
  homepage?: string | null;

  @Column({ name: "CTAADIANT" })
  ctaadiant!: string;

  @Column({ name: "CODASSESSOR" })
  codassessor!: number;

  @Column({ name: "INSCMUN", nullable: true })
  inscmun?: string | null;

  @Column({ name: "CALCINSS" })
  calcinss!: string;

  @Column({ name: "CODUSU" })
  codusu!: number;

  @Column({ name: "RETEMPIS" })
  retempis!: string;

  @Column({ name: "RETEMCOFINS" })
  retemcofins!: string;

  @Column({ name: "RETEMCSL" })
  retemcsl!: string;

  @Column({ name: "USUARIO", nullable: true })
  usuario?: string | null;

  @Column({ name: "CEI", nullable: true })
  cei?: string | null;

  @Column({ name: "LIMCREDMENSAL", type: "float", nullable: true })
  limcredmensal?: number | null;

  @Column({ name: "CODTABST", nullable: true })
  codtabst?: number | null;

  @Column({ name: "QTDMAXTITVENCIDOS", nullable: true })
  qtdmaxtitvencidos?: number | null;

  @Column({ name: "TEMIPI" })
  temipi!: string;

  @Column({ name: "DESCFIN", type: "float", nullable: true })
  descfin?: number | null;

  @Column({ name: "DESCBONIF" })
  descbonif!: string;

  @Column({ name: "IMPLAUDOLOTE" })
  implaudolote!: string;

  @Column({ name: "DIASEM", nullable: true })
  diasem?: number | null;

  @Column({ name: "MEDICO" })
  medico!: string;

  @Column({ name: "TIPOFATUR" })
  tipofatur!: string;

  @Column({ name: "DIASVARPAGTO", nullable: true })
  diasvarpagto?: number | null;

  @Column({ name: "CODUNIMED", nullable: true })
  codunimed?: string | null;

  @Column({ name: "CODCRED", nullable: true })
  codcred?: number | null;

  @Column({ name: "PERCCUSVAR", type: "float", nullable: true })
  perccusvar?: number | null;

  @Column({ name: "MOTORISTA" })
  motorista!: string;

  @Column({ name: "NATUREZAOPERDES", nullable: true })
  naturezaoperdes?: string | null;

  @Column({ name: "SERIENFDES", nullable: true })
  serienfdes?: string | null;

  @Column({ name: "MODELONFDES", nullable: true })
  modelonfdes?: string | null;

  @Column({ name: "DESCSTIVA" })
  descstiva!: string;

  @Column({ name: "CSTIPIENT", nullable: true })
  cstipient?: number | null;

  @Column({ name: "CSTIPISAI", nullable: true })
  cstipisai?: number | null;

  @Column({ name: "CODEMP", nullable: true })
  codemp?: number | null;

  @Column({ name: "PROFESSOR" })
  professor!: string;

  @Column({ name: "ALUNO" })
  aluno!: string;

  @Column({ name: "VLRMINPEDCPA", type: "float", nullable: true })
  vlrminpedcpa?: number | null;

  @Column({ name: "QTDMAXPEDCPA", nullable: true })
  qtdmaxpedcpa?: number | null;

  @Column({ name: "OPERLOGIST" })
  operlogist!: string;

  @Column({ name: "AGRONOMO" })
  agronomo!: string;

  @Column({ name: "PRODUTORTEMNF" })
  produtortemnf!: string;

  @Column({ name: "POTENCIALNEG", type: "float", nullable: true })
  potencialneg?: number | null;

  @Column({ name: "EMAILNFE", nullable: true })
  emailnfe?: string | null;

  @Column({ name: "TIPANEXONFE" })
  tipanexonfe!: string;

  @Column({ name: "ORDSUBST", nullable: true })
  ordsubst?: string | null;

  @Column({ name: "MAXCREDINDENIZ", type: "float", nullable: true })
  maxcredindeniz?: number | null;

  @Column({ name: "MAXDEBINDENIZ", type: "float", nullable: true })
  maxdebindeniz?: number | null;

  @Column({ name: "SALDOINDENIZ", type: "float", nullable: true })
  saldoindeniz?: number | null;

  @Column({ name: "FLEX" })
  flex!: string;

  @Column({ name: "SIMPLES" })
  simples!: string;

  @Column({ name: "SEXO", nullable: true })
  sexo?: string | null;

  @Column({ name: "NURESPPERG", nullable: true })
  nurespPerg?: number | null;

  @Column({ name: "NURESPPERGFECH", nullable: true })
  nurespPergfech?: number | null;

  @Column({ name: "CODROTA", nullable: true })
  codrota?: number | null;

  @Column({ name: "CODCTACTB3", nullable: true })
  codctactb3?: number | null;

  @Column({ name: "CODCTACTB4", nullable: true })
  codctactb4?: number | null;

  @Column({ name: "CODUSUCOBR" })
  codusucobr!: number;

  @Column({ name: "AGRUPAR", nullable: true })
  agrupar?: string | null;

  @Column({ name: "EMAILDANFE" })
  emaildanfe!: string;

  @Column({ name: "VALDESCGRDCAR", nullable: true })
  valdescgrdcar?: string | null;

  @Column({ name: "AGRUPBOLEMPDIF", nullable: true })
  agrupbolempdif?: string | null;

  @Column({ name: "PERCREDINSS", type: "float", nullable: true })
  percredinss?: number | null;

  @Column({ name: "PERMITECORTE" })
  permitecorte!: string;

  @Column({ name: "INDNATRET", nullable: true })
  indnatret?: string | null;

  @Column({ name: "STATUSEDZ" })
  statusedz!: string;

  @Column({ name: "SITRECEITA" })
  sitreceita!: string;

  @Column({ name: "SITSINTEGRA" })
  sitsintegra!: string;

  @Column({ name: "SITCCF" })
  sitccf!: string;

  @Column({ name: "USATABCRFORN" })
  usatabcrforn!: string;

  @Column({ name: "QTDPEDPRZMED", nullable: true })
  qtdpedprzmed?: number | null;

  @Column({ name: "DIASPEDPRZMED", nullable: true })
  diaspedprzmed?: number | null;

  @Column({ name: "ARTPRECAD" })
  artprecad!: string;

  @Column({ name: "GERCTRCAUTO" })
  gerctrcauto!: string;

  @Column({ name: "CODLOCALPADRAO" })
  codlocalpadrao!: number;

  @Column({ name: "SALDODISP", type: "float", nullable: true })
  saldodisp?: number | null;

  @Column({ name: "PROVACRESC", type: "float", nullable: true })
  provacresc?: number | null;

  @Column({ name: "EXIGELAUDOPRD", nullable: true })
  exigelaudoprd?: string | null;

  @Column({ name: "MEIRJ", nullable: true })
  meirj?: string | null;

  @Column({ name: "ENTREGAENDCONTATO" })
  entregaendcontato!: string;

  @Column({ name: "CODEMPPARC", nullable: true })
  codempparc?: number | null;

  @Column({ name: "RETSTVENDA" })
  retstvenda!: string;

  @Column({ name: "LATITUDE", nullable: true })
  latitude?: string | null;

  @Column({ name: "LONGITUDE", nullable: true })
  longitude?: string | null;

  @Column({ name: "TIPOGERBOLETO" })
  tipogerboleto!: string;

  @Column({ name: "PERCJURO", type: "float", nullable: true })
  percjuro?: number | null;

  @Column({ name: "PERCMULTA", type: "float", nullable: true })
  percmulta?: number | null;

  @Column({ name: "TIPJURO", nullable: true })
  tipjuro?: string | null;

  @Column({ name: "PERCDESCESPECIAL", type: "float", nullable: true })
  percdescespecial?: number | null;

  @Column({ name: "CODEMPPREF", nullable: true })
  codemppref?: number | null;

  @Column({ name: "SITESPECIALRESP", nullable: true })
  sitespecialresp?: string | null;

  @Column({ name: "MOTNAORETERISSQN", nullable: true })
  motnaoreterissqn?: string | null;

  @Column({ name: "SITCADSEFAZ", nullable: true })
  sitcadsefaz?: number | null;

  @Column({ name: "DHCADSEFAZ", type: "date", nullable: true })
  dhcadsefaz?: Date | null;

  @Column({ name: "ALIQISSRETSIMPLES", type: "float", nullable: true })
  aliqissretsimples?: number | null;

  @Column({ name: "IDESTRANGEIRO", nullable: true })
  idestrangeiro?: string | null;

  @Column({ name: "TIPGERBOLCENT", nullable: true })
  tipgerbolcent?: string | null;

  @Column({ name: "TIPOGERBOLETODUP" })
  tipogerboletodup!: string;

  @Column({ name: "BOLDESTEMAIL" })
  boldestemail!: string;

  @Column({ name: "COMOCONHECEU", nullable: true })
  comoconheceu?: string | null;

  @Column({ name: "TPASSINANTE", nullable: true })
  tpassinante?: number | null;

  @Column({ name: "APLICLEITRANSP" })
  aplicleitransp!: string;

  @Column({ name: "VENDAMIN", type: "float", nullable: true })
  vendamin?: number | null;

  @Column({ name: "CODENQIPIENT", nullable: true })
  codenqipient?: number | null;

  @Column({ name: "CODENQIPISAI", nullable: true })
  codenqipisai?: number | null;

  @Column({ name: "ENVIPEDEMAILTOP" })
  envipedemailtop!: string;

  @Column({ name: "INTEGRAECONECT" })
  integraeconect!: string;

  @Column({ name: "SENHAECONECT", nullable: true })
  senhaeconect?: string | null;

  @Column({ name: "PRAZOPARCECONECT", nullable: true })
  prazoparceconect?: string | null;

  @Column({ name: "BASEPRAZOECONECT" })
  baseprazoeconect!: number;

  @Column({ name: "PARCELAMECONECT", nullable: true })
  parcelameconect?: string | null;

  @Column({ name: "BASEPARCELECONECT" })
  baseparceleconect!: number;

  @Column({ name: "DIAFECHAECONECT", nullable: true })
  diafechaeconect?: number | null;

  @Column({ name: "DIAPAGTOECONECT", nullable: true })
  diapagtoeconect?: number | null;

  @Column({ name: "PERFILECONECT" })
  perfileconect!: string;

  @Column({ name: "DTEMISNFEFORN", type: "date", nullable: true })
  dtemisnfeForn?: Date | null;

  @Column({ name: "ESTABTRANSP", nullable: true })
  estabtransp?: string | null;

  @Column({ name: "TRANSPPROPRIA", nullable: true })
  transppropria?: string | null;

  @Column({ name: "TERMACORD", nullable: true })
  termacord?: string | null;

  @Column({ name: "INTERVANALISCRED", nullable: true })
  intervanaliscred?: number | null;

  @Column({ name: "INDCOMERCIALIZACAO", nullable: true })
  indcomercializacao?: string | null;

  @Column({ name: "INDAQUISICAO", nullable: true })
  indaquisicao?: string | null;

  @Column({ name: "EMAILNOTIFENTREGA", nullable: true })
  emailnotifentrega?: string | null;

  @Column({ name: "IMPAGRUPFIN", nullable: true })
  impagrupfin?: string | null;

  @Column({ name: "UNIDIMPORT", nullable: true })
  unidimport?: number | null;

  @Column({ name: "TIPLOTACAO", nullable: true })
  tiplotacao?: number | null;

  @Column({ name: "MERCHANTID", type: "float", nullable: true })
  merchantid?: number | null;

  @Column({ name: "CODPARCGRUECONOMICO", nullable: true })
  codparcgrueconomico?: number | null;

  @Column({ name: "ENQART227", nullable: true })
  enqart227?: string | null;

  @Column({ name: "LIMCHEQECONECT", type: "float", nullable: true })
  limcheqeconect?: number | null;

  @Column({ name: "ORGPUBLNFSE", nullable: true })
  orgpublnfse?: string | null;

  @Column({ name: "ASSOCIACAODESP", nullable: true })
  associacaodesp?: string | null;

  @Column({ name: "MODELONOTACOMPRA", nullable: true })
  modelonotacompra?: number | null;

  @Column({ name: "VLRLIQITEMNFE", nullable: true })
  vlrliqitemnfe?: string | null;

  @Column({ name: "VLRLIQITEMNFCE", nullable: true })
  vlrliqitemnfce?: string | null;

  @Column({ name: "ARREDPRIMEIRAPARC", nullable: true })
  arredprimeiraparc?: string | null;

  @Column({ name: "SITCADRF", nullable: true })
  sitcadrf?: number | null;

  @Column({ name: "DHCADRF", type: "date", nullable: true })
  dhcadrf?: Date | null;

  @Column({ name: "CPFPRODRURAL", nullable: true })
  cpfprodrural?: string | null;

  @Column({ name: "EMAILNFSE", nullable: true })
  emailnfse?: string | null;

  @Column({ name: "TIPOTRANSPORTADOR", nullable: true })
  tipotransportador?: string | null;

  @Column({ name: "BLOQUEADO", nullable: true })
  bloqueado?: string | null;

  @Column({ name: "MOTIVOBLOQ", nullable: true })
  motivobloq?: string | null;

  @Column({ name: "CENTRALCAD", nullable: true })
  centralcad?: string | null;

  @Column({ name: "DTVALRNTRC", type: "date", nullable: true })
  dtvalrntrc?: Date | null;

  @Column({ name: "RNTRC", nullable: true })
  rntrc?: string | null;

  @Column({ name: "CODPARCSEG", nullable: true })
  codparcseg?: number | null;

  @Column({ name: "RESPONSAVELSEGURO", nullable: true })
  responsavelseguro?: string | null;

  @Column({ name: "APOLICE", nullable: true })
  apolice?: string | null;

  @Column({ name: "POSTO", nullable: true })
  posto?: string | null;

  @Column({ name: "AGREGADO", nullable: true })
  agregado?: string | null;

  @Column({ name: "QTDDEPENDENTES", nullable: true })
  qtddependentes?: number | null;

  @Column({ name: "RGCODUFEXPEDICAO", nullable: true })
  rgcodufexpedicao?: number | null;

  @Column({ name: "EMISSORRG", nullable: true })
  emissorrg?: string | null;

  @Column({ name: "DTEMISAORG", type: "date", nullable: true })
  dtemisaorg?: Date | null;

  @Column({ name: "USATDE", nullable: true })
  usatde?: string | null;

  @Column({ name: "NUFOP", nullable: true })
  nufop?: number | null;

  @Column({ name: "CNAE", nullable: true })
  cnae?: string | null;

  @Column({ name: "INDCREDNFE", nullable: true })
  indcrednfe?: number | null;

  @Column({ name: "INDCREDCTE", nullable: true })
  indcredcte?: number | null;

  @Column({ name: "DTINIATIV", type: "date", nullable: true })
  dtiniativ?: Date | null;

  @Column({ name: "DTULTSIT", type: "date", nullable: true })
  dtultsit?: Date | null;

  @Column({ name: "DTBAIXA", type: "date", nullable: true })
  dtbaixa?: Date | null;

  @Column({ name: "REGAPUR", nullable: true })
  regapur?: string | null;

  @Column({ name: "CODGRUPO", nullable: true })
  codgrupo?: number | null;

  @Column({ name: "PARCINTER", nullable: true })
  parcinter?: string | null;

  @Column({ name: "INDOPCCP", nullable: true })
  indopccp?: number | null;

  @Column({ name: "CODCONTATOPADCOT", nullable: true })
  codcontatopadcot?: number | null;

  @Column({ name: "TRUNCPARCELA", nullable: true })
  truncparcela?: string | null;

  @Column({ name: "NUVERSAO", nullable: true })
  nuversao?: number | null;

  @Column({ name: "ION_ID", nullable: true })
  ionId?: string | null;

  @Column({ name: "ION_SESSION_ID", nullable: true })
  ionSessionId?: string | null;

  @Column({ name: "INSCRCNO", nullable: true })
  inscrcno?: string | null;

  @Column({ name: "TIMESTADOCIVIL", nullable: true })
  timestadocivil?: string | null;

  @Column({ name: "TIMQUERCOMPRAR", nullable: true })
  timquercomprar?: string | null;

  @Column({ name: "TIMREFERENCIA02", nullable: true })
  timreferencia02?: string | null;

  @Column({ name: "TIMORGAO", nullable: true })
  timorgao?: string | null;

  @Column({ name: "TIMCOMPRADOR", nullable: true })
  timcomprador?: string | null;

  @Column({ name: "TIMBAIRROCOMPRA", nullable: true })
  timbairrocompra?: number | null;

  @Column({ name: "TIMDATACI", type: "date", nullable: true })
  timdataci?: Date | null;

  @Column({ name: "TIMPROPVENDA", nullable: true })
  timpropvenda?: string | null;

  @Column({ name: "TIMPAI", nullable: true })
  timpai?: string | null;

  @Column({ name: "TIMREFERENCIA01", nullable: true })
  timreferencia01?: string | null;

  @Column({ name: "TIMTIPOMORADIA", nullable: true })
  timtipomoradia?: string | null;

  @Column({ name: "TIMINQUILINO", nullable: true })
  timinquilino?: string | null;

  @Column({ name: "TIMTELEFONE02", nullable: true })
  timtelefone02?: string | null;

  @Column({ name: "TIMPROPRIETA", nullable: true })
  timproprieta?: string | null;

  @Column({ name: "TIMCORRESPBANCARIO", nullable: true })
  timcorrespbancario?: string | null;

  @Column({ name: "TIMMAE", nullable: true })
  timmae?: string | null;

  @Column({ name: "TIMFAIXASALARIAL", nullable: true })
  timfaixasalarial?: string | null;

  @Column({ name: "TIMCORRETOR", nullable: true })
  timcorretor?: string | null;

  @Column({ name: "TIMOUTTELS", nullable: true })
  timouttels?: string | null;

  @Column({ name: "TIMTELEFONE01", nullable: true })
  timtelefone01?: string | null;

  @Column({ name: "TIMAINVESTIR", type: "float", nullable: true })
  timainvestir?: number | null;

  @Column({ name: "TIMFIADOR", nullable: true })
  timfiador?: string | null;

  @Column({ name: "TIMSENHASITE", nullable: true })
  timsenhasite?: string | null;

  @Column({ name: "TIMSENHADESC", nullable: true })
  timsenhadesc?: string | null;

  @Column({ name: "TIMCARTORIO", nullable: true })
  timcartorio?: number | null;

  @Column({ name: "TIMPROFISSAO", nullable: true })
  timprofissao?: number | null;

  @Column({ name: "TIMNACIONALIDAD", nullable: true })
  timnacionalidad?: number | null;

  @Column({ name: "TIMCARTREGIMEBENSV", nullable: true })
  timcartregimebensv?: string | null;

  @Column({ name: "AD_CODCLI_OLD", nullable: true })
  adCodcliOld?: number | null;

  @Column({ name: "AD_CODFOR_OLD", nullable: true })
  adCodforOld?: number | null;

  @Column({ name: "AD_CODUSUREV", nullable: true })
  adCodusurev?: number | null;

  @Column({ name: "AD_DHREV", type: "date", nullable: true })
  adDhrev?: Date | null;

  @Column({ name: "AD_ENDERECO_OLD", nullable: true })
  adEnderecoOld?: string | null;

  @Column({ name: "AD_REVISADO", nullable: true })
  adRevisado?: string | null;

  @Column({ name: "PARCSUBSTISS", nullable: true })
  parcsubstiss?: string | null;

  @Column({ name: "EXIGCONTATOENTCAB", nullable: true })
  exigcontatoentcab?: string | null;

  @Column({ name: "ENVIADANFEREDESPACHO", nullable: true })
  enviadanferedespacho?: string | null;

  @Column({ name: "EXIGENOMEPARC", nullable: true })
  exigenomeparc?: string | null;

  @Column({ name: "SALDODISPCAC", type: "float", nullable: true })
  saldodispcac?: number | null;

  @Column({ name: "PROVACRESCCAC", type: "float", nullable: true })
  provacresccac?: number | null;

  @Column({ name: "CONSIDTOTITENSTRIB", nullable: true })
  considtotitenstrib?: string | null;

  @Column({ name: "DESCONSIDESCBASE", nullable: true })
  desconsidescbase?: string | null;

  @Column({ name: "ATUNUVERSAO", nullable: true })
  atunuversao?: string | null;

  @Column({ name: "CODIDENTCONS", nullable: true })
  codidentcons?: number | null;

  @Column({ name: "UTILIZANUCADPARC", nullable: true })
  utilizanucadparc?: string | null;

  @Column({ name: "TIPCLIENTESERVCOM", nullable: true })
  tipclienteservcom?: number | null;

  @Column({ name: "AD_DTMESPEDIDO", nullable: true })
  adDtmespedido?: string | null;

  @Column({ name: "CHAVEPIX", nullable: true })
  chavepix?: string | null;

  @Column({ name: "AD_GPFROTA", nullable: true })
  adGpfrota?: string | null;

  @Column({ name: "EMAILCTE", nullable: true })
  emailcte?: string | null;

  @Column({ name: "CONSPARCADRCST", nullable: true })
  consparcadrcst?: string | null;

  @Column({ name: "DESCONSDESCINSS", nullable: true })
  desconsdescinss?: string | null;

  @Column({ name: "AD_CODUSUINC", nullable: true })
  adCodusuinc?: number | null;

  @Column({ name: "AD_TIPOPERFIL", nullable: true })
  adTipoperfil?: string | null;

  @Column({ name: "AD_NUMTARE", nullable: true })
  adNumtare?: string | null;

  @Column({ name: "DEDUZIPIBCPISCF", nullable: true })
  deduzipibcpiscf?: string | null;

  @Column({ name: "CALCFETHAB", nullable: true })
  calcfethab?: string | null;

  @Column({ name: "GRUPOPISCOFINS", nullable: true })
  grupopiscofins?: number | null;

  @Column({ name: "IGNORASEGUROMOT", nullable: true })
  ignoraseguromot?: string | null;

  @Column({ name: "OPERADORACELULAR", nullable: true })
  operadoracelular?: string | null;

  @Column({ name: "FATORM3KG", type: "float", nullable: true })
  fatorm3kg?: number | null;

  @Column({ name: "REDE", nullable: true })
  rede?: string | null;

  @Column({ name: "REGISTROANS", nullable: true })
  registroans?: string | null;

  @Column({ name: "INAPLICPRODEPE", nullable: true })
  inaplicprodepe?: string | null;

  @Column({ name: "AD_DHLASTSYNC", type: "date", nullable: true })
  adDhlastsync?: Date | null;

  @Column({ name: "AD_IDMOTORISTA", nullable: true })
  adIdmotorista?: number | null;

  @Column({ name: "AD_IDTRANSPORTADORA", nullable: true })
  adIdtransportadora?: number | null;

  @Column({ name: "AD_PJFIXO", nullable: true })
  adPjfixo?: string | null;

  @Column({ name: "ORGAOPUB", nullable: true })
  orgaopub?: string | null;

  @Column({ name: "TPCOMPRAGOV", nullable: true })
  tpcompragov?: string | null;

  @Column({ name: "AD_ATCADASTRAL", nullable: true })
  adAtcadastral?: number | null;
}
