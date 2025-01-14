import { readText } from "../util/util";
interface SpeakIconProps {
  text: string;
}
const SpeakIcon: React.FC<SpeakIconProps> = ({ text }) => {
  return (
    <span
      onClick={() => readText(text)}
      role="button"
      aria-label="Read sentence"
      style={{ marginLeft: "8px", fontSize: "30px" }}
    >
      🔊
    </span>
  );
};
export default SpeakIcon;
