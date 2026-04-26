export const teluguVowelsGroups = [
  ["అ", "ఆ"],
  ["ఇ", "ఈ"],
  ["ఉ", "ఊ"],
  ["ఋ", "ౠ"],
  ["ఎ", "ఏ", "ఐ"],
  ["ఒ", "ఓ", "ఔ"],
  ["అం", "అః"],
];

export const teluguVowels = teluguVowelsGroups.flat();

export const teluguConsonantsGroups = [
  ["క", "ఖ", "గ", "ఘ", "ఙ"],
  ["చ", "ఛ", "జ", "ఝ", "ఞ"],
  ["ట", "ఠ", "డ", "ఢ", "ణ"],
  ["త", "థ", "ద", "ధ", "న"],
  ["ప", "ఫ", "బ", "భ", "మ"],
  ["య", "ర", "ల", "వ"],
  ["శ", "ష", "స", "హ"],
  ["ళ", "క్ష", "ఱ"],
];

export const teluguConsonants = teluguConsonantsGroups.flat();

export const teluguCombined = [...teluguVowels, ...teluguConsonants];

export const teluguGroups = [...teluguVowelsGroups, ...teluguConsonantsGroups];
