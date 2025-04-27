import Label from "./Label";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]; // Un array de objetos con las opciones
};

function Select(props: Props) {
  return (
    <div className="flex flex-col gap-1 relative">
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="text-sm border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-blue-500 focus:ring-2 peer order-2 placeholder:text-gray-300 transition duration-300"
      >
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <Label htmlFor={props.name}>{props.label}</Label>
    </div>
  );
}

export default Select;
