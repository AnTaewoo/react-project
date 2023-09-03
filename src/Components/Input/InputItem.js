export default function InputItem(props) {
  const setValue= (event) => {
    event.preventDefault();
    props.setValue(event.target.value);
  }

  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.title}</label>
      <input type="number" id={props.id} onChange={setValue}/>
    </p>
  );
}
