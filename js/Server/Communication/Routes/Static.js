const path = require('path');
const express = require('express');
const router = express.Router();

const baseDir = path.resolve(__dirname.concat("/../../../.."));

/* Files Routes */
router.use("/js", express.static(baseDir.concat("/js")));
router.use("/css", express.static(baseDir.concat("/css")));
router.use("/assets", express.static(baseDir.concat("/assets")));
router.get("/", (req, res) => res.sendFile(baseDir.concat("/index.html")));
router.get("/login", (req, res) => res.sendFile(baseDir.concat("/login.html")));

/* Disable server files access */
router.all('/js/Server/*', (req, res) => res.status(403).send({ message: 'Forbidden'}));

/* Not found response */
router.all('*', (req, res) => { res.status(404).send() });

module.exports = router;