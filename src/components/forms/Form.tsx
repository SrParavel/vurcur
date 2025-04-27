import { useState } from "react";
import FormData from "./FormData";
import TextField from "./TextField";
import DateField from "./DateField";
import TextArea from "./TextArea";
import config from "../../../config.json";
import Select from "./Select";
import FormSection from "./FormSection";

function Form() {
  const [formData, setFormData] = useState<FormData>(new FormData());

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData(new FormData({ ...formData, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(new FormData());
  };

  const documentTypes = config["Tipo de documento"];
  const initialStates = config["Estado inicial"];
  const personTypes = config["Tipo de persona"];
  const documentStates = config["Estado del documento"];
  const workers = config["Trabajadores"];

  return (
    <form onSubmit={onSubmit} autoComplete="off" className="max-w-md bg-white p-8 rounded-2xl shadow-md">
      <FormSection label="Datos Del Documento">
        <DateField label="Fecha de Ingreso" name="entryDate" value={formData.entryDate} onChange={onChange} />
        <Select
          label="Tipo de Documento"
          name="documentType"
          value={formData.documentType}
          onChange={onChange}
          options={documentTypes}
        ></Select>
        <DateField label="Fecha del Documento" name="documentDate" value={formData.documentDate} onChange={onChange} />
        <Select
          label="Estado Inicial"
          name="initialState"
          value={formData.initialState}
          onChange={onChange}
          options={initialStates}
        ></Select>
        <TextArea
          label="Descripción"
          placeholder="Escriba aquí la descripción del documento"
          name="description"
          value={formData.description}
          onChange={onChange}
        ></TextArea>
      </FormSection>
      <Select
        label="Tipo de Persona"
        name="personType"
        value={formData.personType}
        onChange={onChange}
        options={personTypes}
      ></Select>
      <TextField
        label="CC/NIT"
        placeholder="Número de Identificación"
        name="id"
        value={formData.id}
        onChange={onChange}
      />
      <TextField
        label="Nombre / Razón Social"
        placeholder="Nombre de la Persona / Razón Social"
        name="name"
        value={formData.name}
        onChange={onChange}
      />
      <TextField
        label="Dirección"
        placeholder="Dirección de la Persona"
        name="address"
        value={formData.address}
        onChange={onChange}
      />
      <TextField
        label="Teléfono"
        placeholder="Teléfono de la Persona"
        name="phone"
        value={formData.phone}
        onChange={onChange}
      />
      <TextField
        label="Email"
        placeholder="Email de la Persona"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <DateField label="Fecha de Llenado" name="fillingDate" value={formData.fillingDate} onChange={onChange} />
      <TextField label="CU" placeholder="CU" name="CU" value={formData.CU} onChange={onChange} />
      <TextField label="SNR" placeholder="SNR" name="SNR" value={formData.SNR} onChange={onChange} />
      <Select
        label="Estado del Documento"
        name="currentState"
        value={formData.currentState}
        onChange={onChange}
        options={documentStates}
      ></Select>
      <Select
        label="Trabajador"
        name="worker"
        value={formData.currentState}
        onChange={onChange}
        options={workers}
      ></Select>
      <button
        type="submit"
        className="bg-blue-500 rounded-lg text-white px-4 py-1 hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Aceptar
      </button>
    </form>
  );
}

export default Form;
