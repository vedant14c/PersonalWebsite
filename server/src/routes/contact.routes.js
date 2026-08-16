const express = require("express");

const {
    createMessage
} = require("../controllers/contact.controller");

const validateContact = require("../middleware/contact.validation");
const { contactLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post(
    "/",
    contactLimiter,
    validateContact,
    createMessage
);

module.exports = router;