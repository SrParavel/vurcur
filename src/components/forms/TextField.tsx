import Label from "./Label";
import Input from "./Input";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextField(props: Props) {
  return (
    <div className="flex flex-col gap-1 relative">
      <Input
        type="text"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Label htmlFor={props.name}>{props.label}</Label>
    </div>
  );
}

export default TextField;
