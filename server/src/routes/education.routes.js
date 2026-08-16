const express = require("express");

const {
    getEducation
} = require("../controllers/education.controller");

const router = express.Router();

router.get("/", getEducation);

module.exports = router;