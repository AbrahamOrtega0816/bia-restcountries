export type ICountriesRootObject = {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: string;
  population: number;
  nativeName?: string;
  borders?: string[];
  subregion?: string;
  topLevelDomain?: string[];
  currencies?: ICurrenciesItem[];
  languages?: ILanguagesItem[];
};

export type ILanguagesItem = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type ICurrenciesItem = {
  code: string;
  name: string;
  symbol: string;
};
export type IFlags = {
  png: string;
  svg: string;
  alt: string;
};
export type IName = {
  common: string;
  official: string;
  nativeName: INativeName;
};
export type INativeName = {
  ara?: IAra;
  eng?: IEng;
  fra?: IFra;
  fas?: IFas;
  ukr?: IUkr;
  ind?: IInd;
  msa?: IMsa;
  ces?: ICes;
  slk?: ISlk;
  srp?: ISrp;
  hmo?: IHmo;
  tpi?: ITpi;
  nau?: INau;
  spa?: ISpa;
  ron?: IRon;
  tvl?: ITvl;
  zho?: IZho;
  sin?: ISin;
  tam?: ITam;
  afr?: IAfr;
  nbl?: INbl;
  nso?: INso;
  sot?: ISot;
  ssw?: ISsw;
  tsn?: ITsn;
  tso?: ITso;
  ven?: IVen;
  xho?: IXho;
  zul?: IZul;
  nfr?: INfr;
  swa?: ISwa;
  dan?: IDan;
  fao?: IFao;
  smo?: ISmo;
  tkl?: ITkl;
  hin?: IHin;
  pih?: IPih;
  nep?: INep;
  rus?: IRus;
  uzb?: IUzb;
  fij?: IFij;
  hif?: IHif;
  mfe?: IMfe;
  cnr?: ICnr;
  gil?: IGil;
  por?: IPor;
  fil?: IFil;
  nor?: INor;
  nld?: INld;
  mri?: IMri;
  nzs?: INzs;
  lav?: ILav;
  tha?: ITha;
  arc?: IArc;
  ckb?: ICkb;
  kin?: IKin;
  grn?: IGrn;
  fin?: IFin;
  swe?: ISwe;
  ita?: IIta;
  zdj?: IZdj;
  mlt?: IMlt;
  ell?: IEll;
  deu?: IDeu;
  her?: IHer;
  hgm?: IHgm;
  kwn?: IKwn;
  loz?: ILoz;
  ndo?: INdo;
  est?: IEst;
  ton?: ITon;
  urd?: IUrd;
  glv?: IGlv;
  aym?: IAym;
  que?: IQue;
  tur?: ITur;
  kir?: IKir;
  kon?: IKon;
  lin?: ILin;
  lat?: ILat;
  khm?: IKhm;
  ber?: IBer;
  sqi?: ISqi;
  hrv?: IHrv;
  hye?: IHye;
  pau?: IPau;
  cat?: ICat;
  bjz?: IBjz;
  hat?: IHat;
  sag?: ISag;
  bar?: IBar;
  kal?: IKal;
  tgk?: ITgk;
  som?: ISom;
  div?: IDiv;
  crs?: ICrs;
  pap?: IPap;
  mlg?: IMlg;
  bwg?: IBwg;
  kck?: IKck;
  khi?: IKhi;
  ndc?: INdc;
  nde?: INde;
  nya?: INya;
  sna?: ISna;
  toi?: IToi;
  zib?: IZib;
  kor?: IKor;
  tir?: ITir;
  jam?: IJam;
  mon?: IMon;
  ltz?: ILtz;
  mkd?: IMkd;
  dzo?: IDzo;
  kaz?: IKaz;
  gsw?: IGsw;
  roh?: IRoh;
  cha?: ICha;
  nno?: INno;
  nob?: INob;
  smi?: ISmi;
  bos?: IBos;
  prs?: IPrs;
  pus?: IPus;
  tuk?: ITuk;
  slv?: ISlv;
  isl?: IIsl;
  bul?: IBul;
  kat?: IKat;
  gle?: IGle;
  run?: IRun;
  cal?: ICal;
  lit?: ILit;
  nrf?: INrf;
  ben?: IBen;
  mey?: IMey;
  vie?: IVie;
  hun?: IHun;
  amh?: IAmh;
  bis?: IBis;
  mah?: IMah;
  jpn?: IJpn;
  aze?: IAze;
  heb?: IHeb;
  rar?: IRar;
  tet?: ITet;
  pol?: IPol;
  bel?: IBel;
  pov?: IPov;
  lao?: ILao;
  niu?: INiu;
  lua?: ILua;
  mya?: IMya;
};
export type IAra = {
  official: string;
  common: string;
};
export type IEng = {
  official: string;
  common: string;
};
export type IFra = {
  official: string;
  common: string;
};
export type IFas = {
  official: string;
  common: string;
};
export type IUkr = {
  official: string;
  common: string;
};
export type IInd = {
  official: string;
  common: string;
};
export type IMsa = {
  official: string;
  common: string;
};
export type ICes = {
  official: string;
  common: string;
};
export type ISlk = {
  official: string;
  common: string;
};
export type ISrp = {
  official: string;
  common: string;
};
export type IHmo = {
  official: string;
  common: string;
};
export type ITpi = {
  official: string;
  common: string;
};
export type INau = {
  official: string;
  common: string;
};
export type ISpa = {
  official: string;
  common: string;
};
export type IRon = {
  official: string;
  common: string;
};
export type ITvl = {
  official: string;
  common: string;
};
export type IZho = {
  official: string;
  common: string;
};
export type ISin = {
  official: string;
  common: string;
};
export type ITam = {
  official: string;
  common: string;
};
export type IAfr = {
  official: string;
  common: string;
};
export type INbl = {
  official: string;
  common: string;
};
export type INso = {
  official: string;
  common: string;
};
export type ISot = {
  official: string;
  common: string;
};
export type ISsw = {
  official: string;
  common: string;
};
export type ITsn = {
  official: string;
  common: string;
};
export type ITso = {
  official: string;
  common: string;
};
export type IVen = {
  official: string;
  common: string;
};
export type IXho = {
  official: string;
  common: string;
};
export type IZul = {
  official: string;
  common: string;
};
export type INfr = {
  official: string;
  common: string;
};
export type ISwa = {
  official: string;
  common: string;
};
export type IDan = {
  official: string;
  common: string;
};
export type IFao = {
  official: string;
  common: string;
};
export type ISmo = {
  official: string;
  common: string;
};
export type ITkl = {
  official: string;
  common: string;
};
export type IHin = {
  official: string;
  common: string;
};
export type IPih = {
  official: string;
  common: string;
};
export type INep = {
  official: string;
  common: string;
};
export type IRus = {
  official: string;
  common: string;
};
export type IUzb = {
  official: string;
  common: string;
};
export type IFij = {
  official: string;
  common: string;
};
export type IHif = {
  official: string;
  common: string;
};
export type IMfe = {
  official: string;
  common: string;
};
export type ICnr = {
  official: string;
  common: string;
};
export type IGil = {
  official: string;
  common: string;
};
export type IPor = {
  official: string;
  common: string;
};
export type IFil = {
  official: string;
  common: string;
};
export type INor = {
  official: string;
  common: string;
};
export type INld = {
  official: string;
  common: string;
};
export type IMri = {
  official: string;
  common: string;
};
export type INzs = {
  official: string;
  common: string;
};
export type ILav = {
  official: string;
  common: string;
};
export type ITha = {
  official: string;
  common: string;
};
export type IArc = {
  official: string;
  common: string;
};
export type ICkb = {
  official: string;
  common: string;
};
export type IKin = {
  official: string;
  common: string;
};
export type IGrn = {
  official: string;
  common: string;
};
export type IFin = {
  official: string;
  common: string;
};
export type ISwe = {
  official: string;
  common: string;
};
export type IIta = {
  official: string;
  common: string;
};
export type IZdj = {
  official: string;
  common: string;
};
export type IMlt = {
  official: string;
  common: string;
};
export type IEll = {
  official: string;
  common: string;
};
export type IDeu = {
  official: string;
  common: string;
};
export type IHer = {
  official: string;
  common: string;
};
export type IHgm = {
  official: string;
  common: string;
};
export type IKwn = {
  official: string;
  common: string;
};
export type ILoz = {
  official: string;
  common: string;
};
export type INdo = {
  official: string;
  common: string;
};
export type IEst = {
  official: string;
  common: string;
};
export type ITon = {
  official: string;
  common: string;
};
export type IUrd = {
  official: string;
  common: string;
};
export type IGlv = {
  official: string;
  common: string;
};
export type IAym = {
  official: string;
  common: string;
};
export type IQue = {
  official: string;
  common: string;
};
export type ITur = {
  official: string;
  common: string;
};
export type IKir = {
  official: string;
  common: string;
};
export type IKon = {
  official: string;
  common: string;
};
export type ILin = {
  official: string;
  common: string;
};
export type ILat = {
  official: string;
  common: string;
};
export type IKhm = {
  official: string;
  common: string;
};
export type IBer = {
  official: string;
  common: string;
};
export type ISqi = {
  official: string;
  common: string;
};
export type IHrv = {
  official: string;
  common: string;
};
export type IHye = {
  official: string;
  common: string;
};
export type IPau = {
  official: string;
  common: string;
};
export type ICat = {
  official: string;
  common: string;
};
export type IBjz = {
  official: string;
  common: string;
};
export type IHat = {
  official: string;
  common: string;
};
export type ISag = {
  official: string;
  common: string;
};
export type IBar = {
  official: string;
  common: string;
};
export type IKal = {
  official: string;
  common: string;
};
export type ITgk = {
  official: string;
  common: string;
};
export type ISom = {
  official: string;
  common: string;
};
export type IDiv = {
  official: string;
  common: string;
};
export type ICrs = {
  official: string;
  common: string;
};
export type IPap = {
  official: string;
  common: string;
};
export type IMlg = {
  official: string;
  common: string;
};
export type IBwg = {
  official: string;
  common: string;
};
export type IKck = {
  official: string;
  common: string;
};
export type IKhi = {
  official: string;
  common: string;
};
export type INdc = {
  official: string;
  common: string;
};
export type INde = {
  official: string;
  common: string;
};
export type INya = {
  official: string;
  common: string;
};
export type ISna = {
  official: string;
  common: string;
};
export type IToi = {
  official: string;
  common: string;
};
export type IZib = {
  official: string;
  common: string;
};
export type IKor = {
  official: string;
  common: string;
};
export type ITir = {
  official: string;
  common: string;
};
export type IJam = {
  official: string;
  common: string;
};
export type IMon = {
  official: string;
  common: string;
};
export type ILtz = {
  official: string;
  common: string;
};
export type IMkd = {
  official: string;
  common: string;
};
export type IDzo = {
  official: string;
  common: string;
};
export type IKaz = {
  official: string;
  common: string;
};
export type IGsw = {
  official: string;
  common: string;
};
export type IRoh = {
  official: string;
  common: string;
};
export type ICha = {
  official: string;
  common: string;
};
export type INno = {
  official: string;
  common: string;
};
export type INob = {
  official: string;
  common: string;
};
export type ISmi = {
  official: string;
  common: string;
};
export type IBos = {
  official: string;
  common: string;
};
export type IPrs = {
  official: string;
  common: string;
};
export type IPus = {
  official: string;
  common: string;
};
export type ITuk = {
  official: string;
  common: string;
};
export type ISlv = {
  official: string;
  common: string;
};
export type IIsl = {
  official: string;
  common: string;
};
export type IBul = {
  official: string;
  common: string;
};
export type IKat = {
  official: string;
  common: string;
};
export type IGle = {
  official: string;
  common: string;
};
export type IRun = {
  official: string;
  common: string;
};
export type ICal = {
  official: string;
  common: string;
};
export type ILit = {
  official: string;
  common: string;
};
export type INrf = {
  official: string;
  common: string;
};
export type IBen = {
  official: string;
  common: string;
};
export type IMey = {
  official: string;
  common: string;
};
export type IVie = {
  official: string;
  common: string;
};
export type IHun = {
  official: string;
  common: string;
};
export type IAmh = {
  official: string;
  common: string;
};
export type IBis = {
  official: string;
  common: string;
};
export type IMah = {
  official: string;
  common: string;
};
export type IJpn = {
  official: string;
  common: string;
};
export type IAze = {
  official: string;
  common: string;
};
export type IHeb = {
  official: string;
  common: string;
};
export type IRar = {
  official: string;
  common: string;
};
export type ITet = {
  official: string;
  common: string;
};
export type IPol = {
  official: string;
  common: string;
};
export type IBel = {
  official: string;
  common: string;
};
export type IPov = {
  official: string;
  common: string;
};
export type ILao = {
  official: string;
  common: string;
};
export type INiu = {
  official: string;
  common: string;
};
export type ILua = {
  official: string;
  common: string;
};
export type IMya = {
  official: string;
  common: string;
};
