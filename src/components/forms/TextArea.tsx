import Label from "./Label";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextArea(props: Props) {
  return (
    <div className="flex flex-col gap-1 relative">
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        rows={4}
        className="text-sm border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-blue-500 focus:ring-2 peer order-2 placeholder:text-gray-300 transition duration-300 resize-none"
      />

      <Label htmlFor={props.name}>{props.label}</Label>
    </div>
  );
}

export default TextArea;
