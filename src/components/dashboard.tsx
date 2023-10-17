import { Chart } from "./chart";

export default function DashBoard() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex border-2 border-black">
        <Chart label="누수여부" data={{ data: "누수" }} />
        <Chart label="온도" data={{ data: "온도" }} />
        <Chart label="습도" data={{ data: "습도" }} />
      </div>
      <div className="flex-1 border-2 border-black">hello</div>
    </div>
  );
}
