import { readText } from "../util/util";
interface SpeakIconProps {
  text: string;
  lang?: string;
}
const SpeakIcon: React.FC<SpeakIconProps> = ({ text, lang = "en-US" }) => {
  return (
    <span
      onClick={() => readText(text, lang)}
      role="button"
      aria-label="Read sentence"
      style={{ marginLeft: "8px", fontSize: "30px" }}
    >
      🔊
    </span>
  );
};
export default SpeakIcon;
