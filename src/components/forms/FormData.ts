export default class FormData {
  //Document Data
  entryDate: string = new Date().toISOString().split("T")[0];
  documentType: string = "";
  documentDate: string = new Date().toISOString().split("T")[0];
  initialState: string = "";
  description: string = "";
  //Datos del tercero
  personType: string = "";
  id: string = "";
  name: string = "";
  address: string = "";
  phone: string = "";
  email: string = "";
  //Otros datos
  fillingDate: string = new Date().toISOString().split("T")[0];
  CU: string = "";
  SNR: string = "";
  currentState: string = "";

  constructor(props?: Partial<FormData>) {
    Object.assign(this, props);
  }
}
