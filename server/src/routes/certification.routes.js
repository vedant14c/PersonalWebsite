const express = require("express");

const {
    getCertifications,
    getCertification,
    createCertification,
    updateCertification,
    deleteCertification
} = require("../controllers/certification.controller");

const router = express.Router();

router.get("/", getCertifications);

router.get("/:id", getCertification);

router.post("/", createCertification);

router.put("/:id", updateCertification);

router.delete("/:id", deleteCertification);

module.exports = router;