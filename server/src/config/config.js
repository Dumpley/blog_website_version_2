module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || "tabtracker",
        user_name: process.env.DB_USER || "tabtracker",
        user_password: process.env.DB_PASS || "tabtracker",
        options: {
            dialect: process.env.DIALECT || "sqlite",
            host: process.env.HOST || "localhost",
            storage: "./tabtracker.sqlite",
        },
    },
};
