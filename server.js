const app = require('./app');
const db = require('./db');
const sequelize = db.sequelize;
const Boba = db.Boba;

const syncAndSeed = async() => {
    await sequelize.sync({ force: true });
    await Promise.all([
        Boba.generateRandom(),
        Boba.generateRandom(),
        Boba.generateRandom(),
        Boba.generateRandom(),
        Boba.generateRandom(),
        Boba.generateRandom(),
        Boba.generateRandom(),
    ]);
};

syncAndSeed();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`)); 