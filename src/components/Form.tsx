import { useState } from "react";
import FormData from "./FormData";
import TextField from "./TextField";
import DateField from "./DateField";
import TextArea from "./TextArea";
import config from "../../config.json";
import Select from "./Select";

function Form() {
  const [formState, setFormState] = useState<FormData>(new FormData());

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const formData = new FormData({ ...formState, [name]: value });
    setFormState(formData);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    setFormState(new FormData());
  };

  const documentTypes = config["Tipo de documento"];

  return (
    <form onSubmit={onSubmit} autoComplete="off" className="flex flex-col gap-4 w-60 m-4 border-2 p-4 rounded-lg">
      <DateField label="Fecha de Ingreso" name="entryDate" value={formState.entryDate} onChange={onChange} />
      <Select
        label="Tipo de Documento"
        name="documentType"
        value={formState.documentType}
        onChange={onChange}
        options={documentTypes}
      ></Select>
      <TextArea
        label="Descripción"
        placeholder="Escriba aquí la descripción del documento"
        name="description"
        value={formState.description}
        onChange={onChange}
      ></TextArea>
      <TextField
        label="CC/NIT"
        placeholder="Número de Identificación"
        name="id"
        value={formState.id}
        onChange={onChange}
      />
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
