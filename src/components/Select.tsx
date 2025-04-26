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
        value={props.value}
        onChange={props.onChange}
        className="text-sm border-2 border-gray-300 rounded-lg px-4 py-1 focus:outline-blue-400 peer order-2"
      >
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor={props.name} className="text-sm font-semibold text-gray-700 px-4 peer-focus:text-blue-400">
        {props.label}
      </label>
    </div>
  );
}

export default Select;
