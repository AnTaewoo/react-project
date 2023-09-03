export default function ResultItem(props) {
  return (
    <tbody>
      {props.items.map((item) => (
        <tr key = {item.year} >
          <td>{item.year}</td>
          <td>{item.totalSaving}</td>
          <td>{item.interest}</td>
          <td>{item.totalInterest}</td>
          <td>{item.investedCapital}</td>
        </tr>
      ))}
    </tbody>
  );
}
