export interface ShapeItem {
  name: string;
  emoji: string;
  sides: string;
  type: "2D" | "3D";
}

export const shapesData: ShapeItem[] = [
  { name: "Circle", emoji: "⭕", sides: "0 sides (round)", type: "2D" },
  { name: "Triangle", emoji: "🔺", sides: "3 sides", type: "2D" },
  { name: "Square", emoji: "🟦", sides: "4 equal sides", type: "2D" },
  { name: "Rectangle", emoji: "▮", sides: "4 sides (long)", type: "2D" },
  { name: "Pentagon", emoji: "⬠", sides: "5 sides", type: "2D" },
  { name: "Hexagon", emoji: "⬡", sides: "6 sides", type: "2D" },
  { name: "Oval", emoji: "🥚", sides: "0 sides (stretched)", type: "2D" },
  { name: "Sphere", emoji: "⚽", sides: "3D Round shape", type: "3D" },
  { name: "Cube", emoji: "🧊", sides: "3D Square shape", type: "3D" },
  { name: "Cuboid", emoji: "📦", sides: "3D Rectangle shape", type: "3D" },
];

export const shapes2D = shapesData.filter((s) => s.type === "2D");
export const shapes3D = shapesData.filter((s) => s.type === "3D");
