import { TbHeartRateMonitor } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row ">
      <div className="flex-1 flex-col border-solid border-2 border-black flex justify-center items-center h-screen">
        <TbHeartRateMonitor size={200} />
        <Link href="/client" className="button">
          센서 모니터링
        </Link>
      </div>
      <div className="flex-1 border-solid border-2 border-black flex justify-center items-center h-screen">
        Hello World!!
      </div>
    </div>
  );
}
