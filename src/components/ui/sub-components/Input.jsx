const Input = (props) => {
  return (
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
