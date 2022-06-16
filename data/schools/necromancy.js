export default [
  {
    spell: "Raise Walker",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Raise Greater Walker",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Raise Strong Walker",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Control Undead",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Command Undead",
    min: "-",
    max: "-",
    price: "-",
    location: "",
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
    location: "",
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
    location: "",
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
    location: "",
  }, {
    spell: "Mental Leech",
    min: "-",
    max: "-",
    price: "-",
    location: "",
  }, {
    spell: "Sacrificial Heal",
    min: "-",
    max: "-",
    price: "-",
    location: "",
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
    location: "",
  }
].map((spell) => {
  return {
    ...spell,
    ...{
      school: "Necromancy",
    }
  }
});
