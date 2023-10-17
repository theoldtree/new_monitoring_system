import { Button, Divider } from "@nextui-org/react";
import { ManagerInputForm } from "./inputformManager";
import ManagerBox from "./mangerbox";
export default function ManagerTab() {
  // TODO : manager data 불러와 list에서 보여주기
  // TODO : manager 제거 버튼 기능 추가
  // TODO : manager 추가 기능 추가
  return (
    <div>
      <div className="pt-2">
        <label className="m-2 ">관리인 목록</label>
        <ManagerBox name={"유정무"} id={0} />
        <ManagerBox name={"한현승"} id={1} />
        <ManagerBox name={"최진서"} id={1} />
        <div className="flex justify-end">
          <Button className="mr-3 border-sky-700 border-solid border-2 rounded-md p-1">
            제거
          </Button>
        </div>
      </div>
      <Divider className="m-3" />
      <div>
        <ManagerInputForm
          label="계정추가"
          label2="ID"
          label3="PW"
          btnText="추가"
        />
      </div>
    </div>
  );
}
