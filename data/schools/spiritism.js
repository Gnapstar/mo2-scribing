export default [
  {
    spell: "Transcendental Seance",
    min: 0,
    max: 15,
    price: 100,
    location: "Magic Vendor",
  }, {
    spell: "Expel Spirit",
    min: 0,
    max: 25,
    price: 100,
    location: "Magic Vendor",
  }, {
    spell: "Kau Regeneration",
    min: 10,
    max: 35,
    price: 50,
    location: "",
  }, {
    spell: "Ether Momentum",
    min: 20,
    max: 45,
    price: 100,
    location: "Minotaur Dungeon",
  }, {
    spell: "Ether Barrier",
    min: 30,
    max: 55,
    price: 700,
    location: "Risar Dungeon",
  }, {
    spell: "Transcendental Awareness",
    min: 40,
    max: 65,
    price: 500,
    location: "Magic Vendor",
  }, {
    spell: "Mental Healing",
    min: 50,
    max: 75,
    price: 500,
    location: "Bandit Healer",
  }, {
    spell: "Mental Projectile",
    min: 60,
    max: 85,
    price: 3500,
    location: "Sator Dungeon",
  }, {
    spell: "Dispel Portal",
    min: 70,
    max: 100,
    price: 800,
    location: "Bandit Caster",
  }, {
    spell: "Resurrect",
    min: 75,
    max: 100,
    price: 1000,
    location: "Magic Vendor",
  }, {
    spell: "Etherworld Portal",
    min: 80,
    max: 100,
    price: 3000,
    location: "Spiritism Trader (Forest Troll Head)",
  }
].map((spell) => {
  return {
    ...spell,
    ...{
      school: "Spiritism",
    },
  }
});
