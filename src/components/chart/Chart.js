import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const totalMaxium = props.items.length;
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
