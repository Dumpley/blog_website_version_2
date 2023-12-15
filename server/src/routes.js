const AuthController = require("./controller/AuthController");
const AuthPolicy = require("./policies/AuthPolicy.js");

module.exports = (app) => {
    /**
     * This is a post for registration
     */
    app.post("/register_user", AuthPolicy.register, AuthController.register);
    
    app.post("/login", AuthController.login)
};
