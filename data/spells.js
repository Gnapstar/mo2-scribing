import ECUMENICAL from "./schools/ecumenical";
import SPIRITISM from "./schools/spiritism";
import NECROMANCY from "./schools/necromancy";

const SCHOOLS = [
  "Ecumenical",
  "Spiritism",
  "Necromancy"
];

const SPELLS = [
  ...ECUMENICAL,
  ...SPIRITISM,
  ...NECROMANCY
].map((spell) => {
  return {
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
