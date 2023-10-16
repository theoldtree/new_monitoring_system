interface InputFormProps {
  label: string;
  label2: string;
  label3: string;
  btnText: string;
}

export const InputForm: React.FC<InputFormProps> = ({
  label,
  label2,
  label3,
  btnText,
}) => {
  return (
    <form>
      <div>
        <section>{label}</section>
        <section>
          <label>{label2}</label>
          <input type="text" />
        </section>
        <section>
          <label>{label3}</label>
          <input type="text" />
        </section>
        <button>{btnText}</button>
      </div>
    </form>
  );
};
