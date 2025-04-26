export default class FormData {
  //Document Data
  entryDate: string = new Date().toISOString().split("T")[0];
  documentType: DocumentType = DocumentType.FacturaComercial;
  initialState: InitialState = InitialState.DocumentoInformativo;
  description: string = "";
  //Datos del tercero
  personType: PersonType = PersonType.Natural;
  id: string = "";
  name: string = "";
  address: string = "";
  phone: string = "";
  email: string = "";
  //Otros datos
  fillingDate: string = "";
  CU: string = "";
  SNR: string = "";
  currentState: CurrentState = CurrentState.EnProceso;

  constructor(props?: Partial<FormData>) {
    Object.assign(this, props);
  }
}

export enum DocumentType {
  FacturaComercial = "Factura Comercial",
  DerechoPeticion = "Derecho de Petición",
  Tutela = "Tutela",
  Informativo = "Informativo",
  CuentaCobro = "Cuenta de Cobro",
  Judicial = "Judicial",
  OficioSNR = "Oficio SNR",
  SolicitudesVarias = "Solicitudes Varias",
  OBSVecinos = "OBS Vecinos",
}

export enum InitialState {
  DocumentoInformativo = "Documento Informativo",
  AnalisisYEstudio = "Análisis y Estudio",
  EnEstudio = "En Estudio",
  Viabilidad = "Viabilidad",
}

export enum PersonType {
  Natural = "Natural",
  Juridica = "Juridica",
}

export enum CurrentState {
  EnProceso = "En Proceso",
  Archivado = "Archivado",
  Terminado = "Terminado",
  ParaRespuesta = "Para Respuesta",
}
