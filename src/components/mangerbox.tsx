interface ManagerBoxProps {
  id: number;
  name: string;
}

const ManagerBox: React.FC<ManagerBoxProps> = ({ id, name }) => {
  return (
    <div className="p-1">
      <input type="checkbox" id={id.toString()} />
      <label className="pl-2">{name}</label>
    </div>
  );
};

export default ManagerBox;
