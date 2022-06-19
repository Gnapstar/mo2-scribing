import { SPELLS } from "@/data/spells";

export const namespaced = true;

export const state = () => ({
  schools: [
    "Ecumenical",
    "Spiritism",
    "Necromancy"
  ],
  defaultSpells: JSON.parse(JSON.stringify(SPELLS)),
  spells: []
});

export const getters = {
  getSchools: (state) => state.schools,
  getSpells: (state) => state.spells,
  getSpellsBySchools: (state) => (schools) => state.spells.filter((spell) => schools.includes(spell.school)),
};

export const mutations = {
  load(state) {
    const loadedSpells = localStorage.getItem('spells');
    if (loadedSpells) {
      state.spells = JSON.parse(loadedSpells);
    } else {
      state.spells = SPELLS;
    }
  },

  reset(state) {
    state.spells = JSON.parse(JSON.stringify(state.defaultSpells));
    localStorage.removeItem('spells');
  },

  setPrice(state, data) {
    const idx = state.spells.findIndex((spell) => spell.spell === data.spell);

    if (idx > -1) {
      const spell = state.spells[idx];
      spell.price = parseInt(data.price);

      state.spells[idx] = spell;

      localStorage.setItem('spells', JSON.stringify(state.spells));
    }
  }
}
