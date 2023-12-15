const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const app = express();
const config = require("./config/config")


app.use(morgan("combined"));
app.use(body_parser.json());
app.use(cors());

require("./routes")(app)

// force delets the database tables if already existing
sequelize.sync({force: true}).then(() => {
    app.listen(config.port);
    console.log(`Server running on port ${config.port}`);
});
