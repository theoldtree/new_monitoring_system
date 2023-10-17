import { AiOutlineTeam } from "react-icons/ai";
import { PiBellRingingLight } from "react-icons/pi";
import { SiKakaotalk } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Button } from "@nextui-org/react";

interface IconProps {
  name: string;
  onclick: () => void;
}

const Icon: React.FC<IconProps> = ({ name, onclick }) => {
  let iconComponent;

  switch (name) {
    case "PiBellRingingLight":
      iconComponent = <PiBellRingingLight size="30" />;
      break;
    case "AiOutlineTeam":
      iconComponent = <AiOutlineTeam size="30" />;
      break;
    case "SiKakaotalk":
      iconComponent = <SiKakaotalk size="20" />;
      break;
    case "MdEmail":
      iconComponent = <MdEmail size="30" />;
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <Button
      style={{ width: "100%" }}
      className="flex items-center justify-center h-16 border border-solid border-black transition-all duration-300 transform hover:scale-110"
      onClick={onclick}
    >
      {iconComponent}
    </Button>
  );
};

export default Icon;
