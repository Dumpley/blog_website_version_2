const Joi = require("joi");

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            username: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]+$")),
            userpassword: Joi.string().pattern(
                new RegExp("^[a-zA-Z0-9]{8,32}$")
            ),
            confirming: Joi.string().valid(Joi.ref("userpassword")).required(),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            switch (error.details[0].context.key) {
                case "username":
                    res.status(400).send({
                        error: "Invalid symbols used for username",
                        details: error,
                    });
                    break;
                case "userpassword":
                    res.status(400).send({
                        error: "Invalid symbols used for password or length not between 8 and 32",
                        details: error,
                    });
                    break;
                case "confirming":
                    res.status(400).send({
                        error: "Passwords don't match.",
                        details: error,
                    });
                    break;
                default:
                    res.status(400).send({
                        error: "something didnt work",
                        details: error,
                    });
            }
        } else {
            next();
        }
    },
};
