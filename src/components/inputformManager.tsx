import { Divider } from "@nextui-org/react";
import React from "react";

interface InputFormProps {
  label: string;
  label2: string;
  label3: string;
  btnText: string;
}

export const ManagerInputForm: React.FC<InputFormProps> = ({
  label,
  label2,
  label3,
  btnText,
}) => {
  return (
    <form>
      <div className="border-2 border-black border-solid">
        <section className="flex flex-col items-center py-2">
          <label>{label}</label>
        </section>
        <section
          style={{ width: "100%" }}
          className="flex flex-col pl-2 justify-between border-2 border-black"
        >
          <label>{label2}</label>
          <input type="text" className="border-2 m-1 border-gray-400" />
        </section>
        <section
          style={{ width: "100%" }}
          className="flex flex-col pl-2 justify-between border-2 border-black"
        >
          <label>{label3}</label>
          <input type="text" className="border-2 m-1 border-gray-400" />
        </section>
        <div className="flex justify-end pr-2">
          <button className=" border-sky-700 border-solid border-2 rounded-md p-1">
            {btnText}
          </button>
        </div>
      </div>
    </form>
  );
};
