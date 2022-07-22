export default [
  {
    spell: "Raise Walker",
    min: 1,
    max: 22,
    price: "-",
    location: "Necromancers at ruins",
  }, {
    spell: "Raise Greater Walker",
    min: "-",
    max: "-",
    price: "-",
    location: "Necromancers at ruins",
  }, {
    spell: "Raise Strong Walker",
    min: 19,
    max: 37,
    price: "-",
    location: "Necromancers at ruins",
  }, {
    spell: "Control Undead",
    min: "-",
    max: "-",
    price: "-",
    location: "Necromancers at ruins",
  }, {
    spell: "Command Undead",
    min: 3,
    max: 16,
    price: "-",
    location: "Necromancers at ruins",
  }, {
    spell: "Benumb Mind",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Atrophy",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Death Hand",
    min: "-",
    max: "-",
    price: "-",
    location: "Necromancer in dungeon",
  }, {
    spell: "Cloud of Ashes",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Miasma",
    min: "-",
    max: "-",
    price: "-",
    location: "Jungle camp, item to trade drops from Sators",
  }, {
    spell: "Akh Bond",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Blind",
    min: "-",
    max: "-",
    price: "-",
    location: "Descensus Priest",
  }, {
    spell: "Mental Leech",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Sacrificial Heal",
    min: 5,
    max: 18,
    price: "-",
    location: " Necromancers at ruins",
  }, {
    spell: "Auw Surge",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Crawling Hands",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Sacrificial Eruption",
    min: "-",
    max: "-",
    price: "-",
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
