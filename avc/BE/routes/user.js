const path = require("path");
const multer = require('multer');
const express = require('express');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

const userController = require("../controllers/user")

const productController  = require("../controllers/product")

router.post("/register", userController.postUserRegister)

router.post("/login", userController.postUserLogin)

router.post("/postData", upload.single('image'), productController.postDataAdmin)

router.get("/getData", productController.getData)

router.get("/getDataByDate", productController.getDataByDate)

router.get("/getDataByTitle", productController.getDataByTitle)

module.exports = router;

