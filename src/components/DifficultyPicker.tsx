import { Info } from "lucide-react";
import {
  ConfigSection,
  ConfigSubTitle,
  OptionLabel,
  InfoButton,
  OptionsGrid,
} from "../theme/globalStyles";

interface DifficultyOption<T> {
  value: T;
  label: string;
  info?: string;
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
      <OptionsGrid>
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
            {option.info && (
              <InfoButton data-info={option.info}>
                <Info size={14} />
              </InfoButton>
            )}
          </OptionLabel>
        ))}
      </OptionsGrid>
    </ConfigSection>
  );
};

export default DifficultyPicker;
