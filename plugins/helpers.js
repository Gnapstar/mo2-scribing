export const Helpers = {
  methods: {
    schoolColor(school) {
      if (school === "Ecumenical") {
        return "text-primary";
      }

      if (school === "Spiritism") {
        return "text-danger";
      }

      return "text-dark";
    },

    chanceColor(chance) {
      return `background-color: hsl(${(120 - (1 - (chance / 100)) * 120)}, 78%, 63%)`;
    },

    formatPrice(price) {
      if (!price) {
        return '-';
      }

      const gold = Math.floor(price / 100);

      const silver = price > 100 ? price % 100 : 0;

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
