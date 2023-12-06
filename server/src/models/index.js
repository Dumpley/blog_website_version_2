const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user_name,
    config.db.user_password,
    config.db.options
);

// only for easy adding new models into database
fs.readdirSync(__dirname)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
        const model = require(path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
