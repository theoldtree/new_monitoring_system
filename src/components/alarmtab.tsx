import { Divider } from "@nextui-org/react";
import { Table } from "./table";
import { ManagerInputForm } from "./inputformManager";
import Icon from "./icon";

export default function AlarmTab() {
  // TODO : alarm table에서 경고 목록 data 받아 props로 넘기기
  // TODO : 각각의 알람 버튼에 대해서 api 추가
  // TODO : Threshold 버튼에 대해 기능 추가
  const exampleData = { key: "value" };
  return (
    <div>
      <div>
        <p className="m-1">알람 서비스 추가</p>
        <div style={{ height: "60px" }} className="flex flex-row">
          <Icon name={"SiKakaotalk"} onclick={() => {}} />
          <Icon name={"MdEmail"} onclick={() => {}} />
        </div>
      </div>
      <Divider className="m-3" />
      <div>
        <ManagerInputForm
          label="Threshold 설정"
          label2="온도"
          label3="습도"
          btnText="설정"
        />
      </div>
      <Divider className="m-3" />
      <div>
        <Table label="Alarm Table" data={exampleData} />
      </div>
    </div>
  );
}
