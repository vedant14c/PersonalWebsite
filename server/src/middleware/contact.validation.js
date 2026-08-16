const { body, validationResult } = require("express-validator");

const validateContact = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ max: 100 })
        .withMessage("Name is too long"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email")
        .normalizeEmail(),

    body("subject")
        .trim()
        .notEmpty()
        .withMessage("Subject is required")
        .isLength({ max: 200 })
        .withMessage("Subject is too long"),

    body("message")
        .trim()
        .notEmpty()
        .withMessage("Message is required")
        .isLength({ min: 10, max: 2000 })
        .withMessage("Message must be between 10 and 2000 characters"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: errors.array()
            });
        }

        next();
    }
];

module.exports = validateContact;