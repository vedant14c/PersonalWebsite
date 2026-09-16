const express = require("express");

const {
    getEducation,
    getEducationItem,
    createEducation,
    updateEducation,
    deleteEducation
} = require("../controllers/education.controller");

const router = express.Router();

router.get("/", getEducation);

router.get("/:id", getEducationItem);

router.post("/", createEducation);

router.put("/:id", updateEducation);

router.delete("/:id", deleteEducation);

module.exports = router;