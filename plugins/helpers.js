export const Helpers = {
  methods: {
    schoolColor(school) {
      if (school === "Ecumenical") {
        return "text-ecumenical";
      }

      if (school === "Spiritism") {
        return "text-spiritism";
      }

      if (school === "Necromancy") {
        return "text-necromancy";
      }

      return "text-dark";
    },

    chanceColor(chance) {
      return `background-color: hsl(${(120 - (1 - (chance / 100)) * 120)}, 60%, 60%); color: #000000;`;
    },

    formatPrice(price) {
      if (!price) {
        return '-';
      }

      const gold = Math.floor(price / 100);

      const silver = price >= 100 ? price % 100 : price;

      let output = "";
      if (gold > 0) {
        output += gold + "g";
      }

      if (gold > 0 && silver > 0) {
        output += " ";
      }

      if (silver > 0) {
        output += silver + "s";
      }

      return output;
    },
  }
}
