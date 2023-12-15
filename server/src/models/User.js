
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcryptjs"));

function hashPassword(user, options) {
    const SALT_FACTOR = 8;

    if (!user.changed("userpassword")) {
        return Promise.resolve();
    }

    console.log("Before genSaltAsync");

    return bcrypt
        .genSalt(SALT_FACTOR)
        .then((salt) => {
            console.log("Salt generated:", salt);
            console.log("Before hashAsync");
            console.log("user password", user.userpassword)
            const returnval = bcrypt.hash(user.userpassword, salt);
            console.log("Hash value", returnval)
            return returnval;
        })
        .then((hash) => {
            console.log("Hash generated:", hash);
            user.setDataValue("userpassword", hash);
        })
        .catch((error) => {
            console.error("Error in hashPassword:", error);
        });
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            username: {
                type: DataTypes.STRING,
                unique: true,
            },
            userpassword: DataTypes.STRING,
        },
        {
            hooks: {
                beforeCreate: hashPassword,
                beforeUpdate: hashPassword,
                beforeSave: hashPassword,
            },
        }
    );

    User.prototype.comparePassword = function (userpassword) {
        console.log("User Password before: ", this.userpassword, "User password after", userpassword)
        return bcrypt.compare(userpassword, this.userpassword);
    };

    return User;
};
