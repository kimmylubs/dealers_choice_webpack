const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/db"
);

const Boba = sequelize.define("boba", {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
});

// verbs describe action, state, occurance, form (we <are walking>)
// describing action - currently walking
// adjective describe a thing/noun (that's a <pretty dress>)
// describing noun - pretty dress

const adj = ['Green', 'Black', 'Oolong', 'Lychee', 'Rose', 'White', 'Herbal', 'Yellow', 'Blue', 'Guayusa', 'Puerh', 'Chamomile', 'Ginger', 'Hibisuc', 'Lemon', 'PassionFlower', 'Peppermint', 'Exhiancea', 'Rooibos', 'Rosehip', 'Chai', 'Dandelion', 'ElderBerry'];

function generator() {
 return adj[Math.floor(Math.random() * adj.length)] + " Tea";;;
}

const random = Math.ceil(Math.random() * 10);

Boba.generateRandom = function () {
  const name = generator();
  const price = `$${random}`;
  return this.create({ name, price});
};

// const syncAndSeed = async () => {
//   await sequelize.sync({ force: true });
//   const [green, black, milk, oolong] = await Promise.all([
//     Boba.create({name: "green tea    ", price: Boba.generateRandom() }),
//     Boba.create({name: "black tea", price: Boba.generateRandom() }),
//     Boba.create({name: "milk tea", price: Boba.generateRandom() }),
//     Boba.create({name: "oolong tea", price: Boba.generateRandom() }),
//   ]);
// };

module.exports = {
  Boba,
  sequelize,
};
