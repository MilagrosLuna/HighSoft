// No borrar se usa para los modulos

export default function Button(props) {
  return <button onClick={props.onClick}  value={props.value}>{props.text}</button>;
}
