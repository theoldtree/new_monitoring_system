import AlarmTab from "@/components/\balarmtab";
import DashBoard from "@/components/dashboard";
import Icon from "@/components/icon";
import ManagerTab from "@/components/managertab";
import Link from "next/link";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";

export default function Manager() {
  // TODO: manager 권한체크해서 없다면 메인 페이지로 이동

  const [mode, setMode] = useState("manager");
  const changeModeToManager = () => {
    if (mode !== "manager") {
      setMode("manager");
    }
  };

  const changeModeToAlarm = () => {
    if (mode !== "alarm") {
      setMode("alarm");
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <Link href="/" className="absolute top-3 right-3">
        <IoLogOutOutline size={30} />
      </Link>
      <div style={{ width: "5%" }} className="border-2 border-black">
        <Icon name={"AiOutlineTeam"} onclick={changeModeToManager} />
        <Icon name={"PiBellRingingLight"} onclick={changeModeToAlarm} />
      </div>
      <div style={{ width: "15%" }} className="border-2 border-black">
        {mode === "manager" ? <ManagerTab /> : <AlarmTab />}
      </div>
      <div style={{ width: "80%" }} className="border-2 border-black">
        <DashBoard />
      </div>
    </div>
  );
}
