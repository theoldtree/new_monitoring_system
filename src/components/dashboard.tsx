import { Chart } from "./chart";
import { Table } from "./table";

export default function DashBoard() {
  // TODO : 각각의 시계열 데이터를 받아 chart data props 에 전달
  // TODO : Sensor Data 및 Threshold Data 를 Join하여 table data props에 전달
  const exampleData = { key: "value" };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex border-2 border-black">
        <Chart label="누수여부" data={{ data: "누수" }} />
        <Chart label="온도" data={{ data: "온도" }} />
        <Chart label="습도" data={{ data: "습도" }} />
      </div>
      <div className="flex-1 border-2 border-black">
        <Table label="Data Table" data={exampleData} />
      </div>
    </div>
  );
}
