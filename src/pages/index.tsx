import { TbHeartRateMonitor } from "react-icons/tb";
import Link from "next/link";
import { InputForm } from "@/components/inputform";

export default function Home() {
  // TODO : auth table로 부터 계정 정보를 받아 올바른 계정이면 manager로그인 아니면 경고
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
        <InputForm label="관리자" label2="ID" label3="PW" btnText="로그인" />
      </section>
    </div>
  );
}
