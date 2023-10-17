import { Divider } from "@nextui-org/react";
import { ManagerInputForm } from "./inputformManager";
export default function ManagerTab() {
  return (
    <div>
      <div></div>
      <Divider />
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
