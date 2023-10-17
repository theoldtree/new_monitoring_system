import { Divider } from "@nextui-org/react";
import { Table } from "./table";
import { ManagerInputForm } from "./inputformManager";
import Icon from "./icon";

export default function AlarmTab() {
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
