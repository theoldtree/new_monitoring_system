import { Divider } from "@nextui-org/react";
export default function Manager() {
  // TODO: manager 권한체크해서 없다면 메인 페이지로 이동
  return (
    <div className="flex h-screen w-screen">
      <div style={{ width: "5%" }} className="border-2 border-black"></div>
      <div style={{ width: "15%" }} className="border-2 border-black"></div>
      <div style={{ width: "80%" }} className="border-2 border-black"></div>
    </div>
  );
}
