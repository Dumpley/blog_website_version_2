module.exports = (sequelize, DataTypes) => {
     return sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        userpassword: DataTypes.STRING,
    });
};
