import { TbHeartRateMonitor } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row ">
      <section className="flex-1 flex-col border-solid border-2 border-black flex justify-center items-center h-screen">
        <TbHeartRateMonitor size={200} />
        <div className="border-sky-700 border-solid border-2 rounded-md p-2">
          <Link href="/client" className="button">
            센서 모니터링
          </Link>
        </div>
      </section>
      <section className="flex-1 border-solid border-2 border-black flex justify-center items-center h-screen">
        Hello World!!
      </section>
    </div>
  );
}
