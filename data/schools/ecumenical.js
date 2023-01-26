export default [
  {
    spell: "Spurt",
    min: 0,
    max: 15,
    price: 10,
    location: "Magic Vendor",
  }, {
    spell: "Lesser Heal",
    min: 0,
    max: 25,
    price: 25,
    location: "Magic Vendor",
  }, {
    spell: "Corruption",
    min: 5,
    max: 30,
    price: 40,
    location: "",
  }, {
    spell: "Purify",
    min: 15,
    max: 35,
    price: 50,
    location: "",
  }, {
    spell: "Lightning",
    min: 15,
    max: 40,
    price: 50,
    location: "",
  }, {
    spell: "Outburst",
    min: 20,
    max: 45,
    price: 100,
    location: "",
  }, {
    spell: "Mind Blast",
    min: 30,
    max: 55,
    price: 70,
    location: "Bandit Caster",
  }, {
    spell: "Magic Reflection",
    min: 35,
    max: 60,
    price: 150,
    location: "",
  }, {
    spell: "Thunderlash",
    min: 40,
    max: 65,
    price: 70,
    location: "Bandit Caster",
  }, {
    spell: "Greater Heal",
    min: 50,
    max: 75,
    price: 500,
    location: "Bandit Healer",
  }, {
    spell: "Fulmination",
    min: 60,
    max: 85,
    price: 1200,
    location: "Bandit Caster",
  }, {
    spell: "Flame Strike",
    min: 70,
    max: 95,
    price: 1000,
    location: "Bandit Caster",
  }, {
    spell: "Earthquake",
    min: 75,
    max: 100,
    price: 5000,
    location: "Veteran Bandit Caster, Alchemist Bowman, Illusionist",
  }
].map((spell) => {
  return {
    ...spell,
    ...{
      school: "Ecumenical",
    }
  }
});