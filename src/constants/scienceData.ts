export interface ScienceItem {
  name: string;
  emoji: string;
  description?: string;
}

export const bodyParts: ScienceItem[] = [
  // Head region
  { name: "Head", emoji: "🗣️", description: "Where your brain lives!" },
  { name: "Hair", emoji: "💇", description: "Hair on your head!" },
  { name: "Eyes", emoji: "👁️", description: "We see with eyes!" },
  { name: "Ears", emoji: "👂", description: "We hear with ears!" },
  { name: "Nose", emoji: "👃", description: "We smell with nose!" },
  { name: "Mouth", emoji: "👄", description: "We eat and talk!" },
  { name: "Teeth", emoji: "🦷", description: "Helps you chew food!" },
  { name: "Tongue", emoji: "👅", description: "Helps you taste!" },
  // Torso
  { name: "Neck", emoji: "🫀", description: "Holds your head up!" },
  { name: "Shoulder", emoji: "🦴", description: "Top of your arm!" },
  { name: "Chest", emoji: "💪", description: "Front of your body!" },
  { name: "Stomach", emoji: "🫃", description: "Where food goes!" },
  { name: "Back", emoji: "🔙", description: "Behind your body!" },
  // Arms
  { name: "Arm", emoji: "💪", description: "Used to pick up things!" },
  { name: "Elbow", emoji: "🦾", description: "Bends your arm!" },
  { name: "Hand", emoji: "✋", description: "Used to hold things!" },
  { name: "Fingers", emoji: "🤙", description: "Used to touch things!" },
  // Legs
  { name: "Leg", emoji: "🦵", description: "Used to walk and run!" },
  { name: "Knee", emoji: "🦴", description: "Bends your leg!" },
  { name: "Foot", emoji: "🦶", description: "Helps you stand!" },
  { name: "Toes", emoji: "🦶", description: "On your feet!" },
];

export const bodyPartsGroups = [
  bodyParts.slice(0, 8), // Head region
  bodyParts.slice(8, 13), // Torso
  bodyParts.slice(13, 17), // Arms
  bodyParts.slice(17, 21), // Legs
];

export const senseOrgans: ScienceItem[] = [
  { name: "Eyes", emoji: "👁️", description: "Sight — we see things!" },
  { name: "Ears", emoji: "👂", description: "Hearing — we hear sounds!" },
  { name: "Nose", emoji: "👃", description: "Smell — we smell things!" },
  { name: "Tongue", emoji: "👅", description: "Taste — we taste food!" },
  { name: "Skin", emoji: "🤚", description: "Touch — we feel things!" },
];
