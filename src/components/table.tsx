interface TableProps {
  label: string;
  data: Record<string, any>;
}

export const Table: React.FC<TableProps> = ({ data, label }) => {
  return (
    <div className="flex-1 border-2 border-black items-center justify-center pt-2 h-full">
      <label className="m-4 text-center">{label}</label>
      <div className="flex flex-col border-2 border-black p-3 w-5/6 h-5/6 mx-auto mt-3">
        {/* 예시: 객체의 key와 value를 출력 */}
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};
