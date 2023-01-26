export default [
  {
    spell: "Raise Walker",
    min: 1,
    max: 22,
    price: 50,
    location: "Necromancers at ruins",
  }, {
    spell: "Raise Greater Walker",
    min: 34,
    max: 46,
    price: 55000,
    location: "Necromancers at ruins",
  }, {
    spell: "Raise Strong Walker",
    min: 19,
    max: 37,
    price: 1000,
    location: "Necromancers at ruins",
  }, {
    spell: "Control Undead",
    min: 5,
    max: 10,
    price: 1000,
    location: "Necromancers at ruins",
  }, {
    spell: "Command Undead",
    min: 3,
    max: 16,
    price: 100,
    location: "Necromancers at ruins",
  }, {
    spell: "Benumb Mind",
    min: 64,
    max: 77,
    price: 12000,
    location: "Coffers in dungeon",
  }, {
    spell: "Atrophy",
    min: 74,
    max: 87,
    price: 70000,
    location: "Coffers in dungeon",
  }, {
    spell: "Death Hand",
    min: 45,
    max: 59,
    price: 4500,
    location: "Necromancer in dungeon",
  }, {
    spell: "Cloud of Ashes",
    min: 1,
    max: 25,
    price: 800,
    location: "Coffers in dungeon and Descensus Priests",
  }, {
    spell: "Miasma",
    min: 55,
    max: 67,
    price: 120000,
    location: "Jungle camp, item to trade drops from Sators",
  }, {
    spell: "Akh Bond",
    min: 60,
    max: 70,
    price: 2000,
    location: "Coffers in dungeon and Descensus Priests",
  }, {
    spell: "Blind",
    min: 38,
    max: 55,
    price: 2000,
    location: "Coffers in dungeon and Descensus Priests",
  }, {
    spell: "Mental Leech",
    min: 83,
    max: 100,
    price: 3500,
    location: "Coffers in dungeon and Descensus Priests",
  }, {
    spell: "Sacrificial Heal",
    min: 5,
    max: 18,
    price: 300,
    location: " Necromancers at ruins",
  }, {
    spell: "Auw Surge",
    min: 85,
    max: 92,
    price: 4500,
    location: "Descensus High Priest",
  }, {
    spell: "Crawling Hand",
    min: 56,
    max: 69,
    price: 9000,
    location: "Coffers in dungeon",
  }, {
    spell: "Sacrificial Eruption",
    min: 3,
    max: 16,
    price: 200,
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
