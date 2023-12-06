module.exports = (sequelize, DataTypes) =>
    sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            unique: true,
        },
        user_password: DataTypes.STRING,
    });
