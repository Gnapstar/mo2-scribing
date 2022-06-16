import ECUMENICAL from "./schools/ecumenical";
import SPIRITISM from "./schools/spiritism";
import NECROMANCY from "./schools/necromancy";

const SPELLS = [
  ...ECUMENICAL,
  ...SPIRITISM,
  ...NECROMANCY
].map((spell) => {
  return {
    ...spell,
    ...{
      chance: 0,
    },
  }
}).sort((a, z) => {
  return (a.min + a.max) - (z.min + z.max);
});

export { SPELLS };
