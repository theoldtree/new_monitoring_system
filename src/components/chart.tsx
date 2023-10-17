interface ChartProps {
  label: string;
  data: Record<string, any>; // JSON 타입의 object
}

export const Chart: React.FC<ChartProps> = ({ label, data }) => {
  // TODO : data를 받아 Chart 그래프 완성
  return (
    <div className="flex-1 border-2 border-black items-center justify-center pt-2">
      <label className="m-4 text-center">{label}</label>
      <div className="flex flex-col border-2 border-black p-3 w-5/6 h-5/6 mx-auto mt-3">
        <pre className="overflow-auto">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
