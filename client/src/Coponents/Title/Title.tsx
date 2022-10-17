interface Props {
  text: string;
  children?: React.ReactNode;
}

function Title(props: Props) {
  return (
    <h1 className="text-center m-3 bg-light">
      {props.text}
      <span>
        <h1 className="text-light">{props.children}</h1>
      </span>
    </h1>
  );
}

export default Title;
