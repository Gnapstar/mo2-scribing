export default [
  {
    spell: "Scroll of Elemental Propulsion",
    min: 0,
    max: 20,
    price: "-",
    location: ""
  }, {
    spell: "Elemental Aggregation Scroll",
    min: 25,
    max: 50,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Fire",
    min: 0,
    max: 20,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Earth",
    min: 0,
    max: 20,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Heat",
    min: 15,
    max: 30,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Dust",
    min: 20,
    max: 35,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Water",
    min: 0,
    max: 20,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Darkness",
    min: 15,
    max: 30,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Cold",
    min: 15,
    max: 30,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Air",
    min: 0,
    max: 20,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Light",
    min: 15,
    max: 30,
    price: "-",
    location: ""
  }, {
    spell: "Scroll of Elemental Vapor",
    min: 20,
    max: 35,
    price: "-",
    location: ""
  }
].map((spell) => {
  return {
    ...spell,
    ...{
      school: "Elementalism",
    }
  }
});
