type Props = {
  children: React.ReactNode;
  htmlFor: string;
};

function Label(props: Props) {
  return (
    <label
      className="text-sm font-semibold text-gray-700 px-4 peer-focus:text-blue-500 transition duration-300"
      htmlFor={props.htmlFor}
    >
      {props.children}
    </label>
  );
}

export default Label;
