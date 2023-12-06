module.exports = (app) => {
    /**
     * This is a post for registration
     */
    app.post("/register_user", (req, res) => {
        res.send({
            message: `Hello ${req.body.user_name}. Welcome @ my place`,
        });
    });
};

