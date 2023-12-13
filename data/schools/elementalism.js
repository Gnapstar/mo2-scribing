export default [
  {
    spell: "Scroll of Elemental Propulsion",
    min: 0,
    max: 20,
    price: 1000,
    location: "Tindrem, Toxai, Jungle Camp"
  }, {
    spell: "Scroll of Emanation",
    min: 15,
    max: 30,
    price: 9000,
    location: "-"
  }, {
    spell: "Elemental Aggregation Scroll",
    min: 25,
    max: 50,
    price: 4000,
    location: "Tindrem, Toxai, Jungle Camp"
  }, {
    spell: "Scroll of Elemental Fire",
    min: 0,
    max: 20,
    price: 25,
    location: "Tindrem"
  }, {
    spell: "Scroll of Elemental Earth",
    min: 0,
    max: 20,
    price: 1500,
    location: "Tindrem, Toxai, Jungle Camp"
  }, {
    spell: "Scroll of Elemental Heat",
    min: 15,
    max: 30,
    price: 5000,
    location: "Tindrem"
  }, {
    spell: "Scroll of Elemental Dust",
    min: 20,
    max: 35,
    price: 7000,
    location: "Tindrem"
  }, {
    spell: "Scroll of Elemental Water",
    min: 0,
    max: 20,
    price: 4500,
    location: "Toxai"
  }, {
    spell: "Scroll of Elemental Darkness",
    min: 15,
    max: 30,
    price: 8000,
    location: "Toxai"
  }, {
    spell: "Scroll of Elemental Cold",
    min: 15,
    max: 30,
    price: 8000,
    location: "Toxai"
  }, {
    spell: "Scroll of Elemental Air",
    min: 0,
    max: 20,
    price: 6500,
    location: "Jungle Camp"
  }, {
    spell: "Scroll of Elemental Light",
    min: 15,
    max: 30,
    price: 8000,
    location: "Jungle Camp"
  }, {
    spell: "Scroll of Elemental Vapor",
    min: 20,
    max: 35,
    price: 10000,
    location: "Jungle Camp"
  }, {
    spell: "Scroll of Elemental Direction",
    min: 65,
    max: 90,
    price: 8000,
    location: ""
  }, {
    spell: "Scroll of Elemental Arrangement",
    min: 45,
    max: 70,
    price: 6000,
    location: ""
  }, {
    spell: "Scroll of Elemental Polarization",
    min: 85,
    max: 100,
    price: 5000,
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
