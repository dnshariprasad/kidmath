export interface ScienceItem {
  name: string;
  emoji: string;
  description?: string;
}

export const bodyParts: ScienceItem[] = [
  // Head region
  { name: "Head", emoji: "🗣️", description: "Top of the body" },
  { name: "Hair", emoji: "💇", description: "Grows on the head" },
  { name: "Eyes", emoji: "👁️", description: "We see with eyes" },
  { name: "Ears", emoji: "👂", description: "We hear with ears" },
  { name: "Nose", emoji: "👃", description: "We smell with nose" },
  { name: "Mouth", emoji: "👄", description: "We eat and talk" },
  { name: "Teeth", emoji: "🦷", description: "Help us chew food" },
  { name: "Tongue", emoji: "👅", description: "We taste with tongue" },
  // Torso
  { name: "Neck", emoji: "🫀", description: "Connects head to body" },
  { name: "Shoulder", emoji: "🦴", description: "Top of the arm" },
  { name: "Chest", emoji: "💪", description: "Front of the body" },
  { name: "Stomach", emoji: "🫃", description: "Digests food" },
  { name: "Back", emoji: "🔙", description: "Behind the body" },
  // Arms
  { name: "Arm", emoji: "💪", description: "Used to lift things" },
  { name: "Elbow", emoji: "🦾", description: "Bends the arm" },
  { name: "Hand", emoji: "✋", description: "We hold with hands" },
  { name: "Fingers", emoji: "🤙", description: "5 on each hand" },
  // Legs
  { name: "Leg", emoji: "🦵", description: "Used to walk and run" },
  { name: "Knee", emoji: "🦴", description: "Bends the leg" },
  { name: "Foot", emoji: "🦶", description: "We stand on our feet" },
  { name: "Toes", emoji: "🦶", description: "5 on each foot" },
];

export const bodyPartsGroups = [
  bodyParts.slice(0, 8), // Head region
  bodyParts.slice(8, 13), // Torso
  bodyParts.slice(13, 17), // Arms
  bodyParts.slice(17, 21), // Legs
];

export const senseOrgans: ScienceItem[] = [
  { name: "Eyes", emoji: "👁️", description: "Sight — we see the world" },
  { name: "Ears", emoji: "👂", description: "Hearing — we hear sounds" },
  { name: "Nose", emoji: "👃", description: "Smell — we smell things" },
  { name: "Tongue", emoji: "👅", description: "Taste — we taste food" },
  { name: "Skin", emoji: "🤚", description: "Touch — we feel things" },
];
