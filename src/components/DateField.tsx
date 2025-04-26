type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function DataField(props: Props) {
  return (
    <div className="flex flex-col gap-1 relative">
      <input type="date" id={props.name} {...props} className="text-sm border-2 border-gray-300 rounded-lg px-4 py-1 focus:outline-blue-400 peer order-2" />
      <label htmlFor={props.name} className="text-sm font-semibold text-gray-700 px-4 peer-focus:text-blue-400">
        {props.label}
      </label>
    </div>
  );
}

export default DataField;
