export default [
  {
    spell: "Raise Walker",
    min: 1,
    max: 22,
    price: 1500,
    location: "Necromancers at ruins",
  }, {
    spell: "Raise Greater Walker",
    min: 34,
    max: 46,
    price: 500000,
    location: "Necromancers at ruins",
  }, {
    spell: "Raise Strong Walker",
    min: 19,
    max: 37,
    price: 10000,
    location: "Necromancers at ruins",
  }, {
    spell: "Control Undead",
    min: 5,
    max: 10,
    price: 35000,
    location: "Necromancers at ruins",
  }, {
    spell: "Command Undead",
    min: 3,
    max: 16,
    price: 2500,
    location: "Necromancers at ruins",
  }, {
    spell: "Benumb Mind",
    min: 64,
    max: 77,
    price: 500000,
    location: "",
  }, {
    spell: "Atrophy",
    min: 74,
    max: 87,
    price: 600000,
    location: "",
  }, {
    spell: "Death Hand",
    min: 45,
    max: 59,
    price: 50000,
    location: "Necromancer in dungeon",
  }, {
    spell: "Cloud of Ashes",
    min: 1,
    max: 25,
    price: 3000,
    location: "",
  }, {
    spell: "Miasma",
    min: 55,
    max: 67,
    price: 300000,
    location: "Jungle camp, item to trade drops from Sators",
  }, {
    spell: "Akh Bond",
    min: 60,
    max: 70,
    price: 100000,
    location: "",
  }, {
    spell: "Blind",
    min: 38,
    max: 55,
    price: 10000,
    location: "Descensus Priest",
  }, {
    spell: "Mental Leech",
    min: 83,
    max: 100,
    price: 90000,
    location: "",
  }, {
    spell: "Sacrificial Heal",
    min: 5,
    max: 18,
    price: 400,
    location: " Necromancers at ruins",
  }, {
    spell: "Auw Surge",
    min: 85,
    max: 92,
    price: 200000,
    location: "",
  }, {
    spell: "Crawling Hand",
    min: 56,
    max: 69,
    price: 100000,
    location: "",
  }, {
    spell: "Sacrificial Eruption",
    min: 3,
    max: 16,
    price: 800,
    location: " Necromancers at ruins",
  }
].map((spell) => {
  return {
    ...spell,
    ...{
      school: "Necromancy",
    }
  }
});
