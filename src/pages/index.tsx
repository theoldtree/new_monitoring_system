import { TbHeartRateMonitor } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-row ">
      <div className="flex-1 border-solid border-2 border-black flex justify-center items-center h-screen">
        <TbHeartRateMonitor size={200} />
        Hello World!!
      </div>
      <div className="flex-1 border-solid border-2 border-black flex justify-center items-center h-screen">
        Hello World!!
      </div>
    </div>
  );
}
