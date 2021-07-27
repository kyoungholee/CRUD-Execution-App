const express = require("express");
const authRouter = require("./auth");
const boardRouter = require("./board");
const categoryRouter = require("./category");

const router = express.router();

router.use('/auth', authRouter);
router.use('/board', boardRouter);
router.use('/category', categoryRouter);


module.exports = router;

