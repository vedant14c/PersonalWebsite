const express = require("express");

const {
    getCertifications
} = require("../controllers/certification.controller");

const router = express.Router();

router.get("/", getCertifications);

module.exports = router;