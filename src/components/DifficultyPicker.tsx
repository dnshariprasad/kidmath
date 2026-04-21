import { ConfigSection, ConfigSubTitle, OptionLabel } from "../theme/globalStyles";

interface DifficultyOption<T> {
  value: T;
  label: string;
}

interface DifficultyPickerProps<T> {
  title?: string;
  options: DifficultyOption<T>[];
  currentValue: T;
  onChange: (value: T) => void;
  name: string;
}

const DifficultyPicker = <T extends string | number>({
  title = "Difficulty",
  options,
  currentValue,
  onChange,
  name,
}: DifficultyPickerProps<T>) => {
  return (
    <ConfigSection>
      <ConfigSubTitle>{title}</ConfigSubTitle>
      {options.map((option) => (
        <OptionLabel key={option.value} $isActive={currentValue === option.value}>
          <input
            type="radio"
            name={name}
            checked={currentValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </OptionLabel>
      ))}
    </ConfigSection>
  );
};

export default DifficultyPicker;
