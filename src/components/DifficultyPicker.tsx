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
  disabled?: boolean;
}

const DifficultyPicker = <T extends string | number>({
  title = "Difficulty",
  options,
  currentValue,
  onChange,
  name,
  disabled = false,
}: DifficultyPickerProps<T>) => {
  return (
    <ConfigSection $disabled={disabled}>
      <ConfigSubTitle>{title}</ConfigSubTitle>
      {options.map((option) => (
        <OptionLabel key={option.value} $isActive={currentValue === option.value}>
          <input
            type="radio"
            name={name}
            checked={currentValue === option.value}
            onChange={() => !disabled && onChange(option.value)}
            disabled={disabled}
          />
          {option.label}
        </OptionLabel>
      ))}
    </ConfigSection>
  );
};

export default DifficultyPicker;
