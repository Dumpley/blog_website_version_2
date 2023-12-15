const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentiacation.jwtSecret, {
        expiresIn: ONE_WEEK,
    });
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            // if SequelizeUniqueConstrainError: Validation error appears teh database tries to create a table with username being unique,
            // although tis is forbitten to work: Means the Username already exists as such
            res.status(400).send({
                error: `There has been a problem. ${err}`,
            });
        }
    },
    async login(req, res) {
        try {
            const { username, userpassword } = req.body;
            const user = await User.findOne({
                where: {
                    username: username,
                },
            });
            if (!user) {
                res.status(403).send({
                    error: "The login info is incorrect",
                });
            }

            const isPasswordValid = await user.comparePassword(userpassword);

            console.log("User: ", user)

            console.log("Validation Error tracking: ", isPasswordValid)

            if (!isPasswordValid) {
                return res.status(403).send({
                    error: "The login info is incorrect",
                });
            }

            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson),
            });
        } catch (err) {
            res.status(500).send({
                error: "An error has occured when loggin in. We are on fixing it!!!",
                details: err,
            });
        }
    },
};
