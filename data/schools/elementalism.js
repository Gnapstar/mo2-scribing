export default [
  {
    spell: "Meteor",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Swarm Glacier",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Shard Fire",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Protector Ice",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Protector Storm",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Protector Water",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Protector Fire",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Wall Lightning",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Globe Chain",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Lightning Hail",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Barrage Chaos",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Blast Water",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Rift Tornado Ice",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Shield Heat",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Wave Crushing",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Rock Cold",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Wave Peace Healing",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Rain Stone",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Wall Precipitation Earth",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Shiver Ice",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Wall Air",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "BurstHail",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Missile Light",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Orb Breathing",
    min: "-",
    max: "-",
    price: "-",
    location: ""
  }, {
    spell: "Sphere",
    min: "-",
    max: "-",
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
