const express = require("express");

const {
    getSkills
} = require("../controllers/skill.controller");

const router = express.Router();

router.get("/", getSkills);

module.exports = router;