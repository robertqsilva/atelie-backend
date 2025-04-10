const express = require("express");
const router = express.Router();
const infoLojaController = require("../controllers/lojaControllers");

router.get("/infoloja", infoLojaController.getInfoLoja);
router.post("/infoloja", infoLojaController.upsertInfoLoja);

module.exports = router;