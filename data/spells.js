import ECUMENICAL from "./schools/ecumenical";
import SPIRITISM from "./schools/spiritism";
import NECROMANCY from "./schools/necromancy";
import ELEMENTALISM from "./schools/elementalism";

const SCHOOLS = [
  "Ecumenical",
  "Spiritism",
  "Necromancy",
  "Elementalism"
];

const SPELLS = [
  ...ECUMENICAL,
  ...SPIRITISM,
  ...NECROMANCY,
  ...ELEMENTALISM
].map((spell) => {
  return {
    ...{
      description: "",
      heal: "",
      damage: "",
      mana: 0,
      range: 0,
      speed: "",
      castTime: 0,
      skillRange: "",
      alignment: "",
    },
    ...spell,
    ...{
      chance: 0,
      scribed: false,
    },
  }
}).sort((a, z) => {
  return (a.min + a.max) - (z.min + z.max);
});

export { SPELLS, SCHOOLS };
