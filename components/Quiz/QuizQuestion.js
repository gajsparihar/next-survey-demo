import Radio from "../utils/Radio";

export default function QuizQuestion({ question, selected, onSelect }) {
  const { title, options, id } = question;
  console.log(selected);
  return (
    <>
      <p className="text-2xl font-bold">{title || ""}</p>
      {options &&
        options.map(({ key, value }) => {
          return (
            <p key={key}>
              <Radio
                name={id}
                selected={selected === key}
                value={key}
                text={value}
                onClick={onSelect}
              />
            </p>
          );
        })}
    </>
  );
}
