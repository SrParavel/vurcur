type Props = {
  children: React.ReactNode;
  label: string;
};

function FormSection(props: Props) {
  return (
    <fieldset className="gap-2 grid grid-cols-2">
      <legend>{props.label}</legend>
      {props.children}
    </fieldset>
  );
}

export default FormSection;
