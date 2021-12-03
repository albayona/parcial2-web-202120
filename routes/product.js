var express = require('express');
var router = express.Router();

const {getProducts} = require("../controllers/product")

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/:query', function (req, res, next) {
    console.log("------")
    let q = req.params["query"];
    const result = getProducts(q);
    res.send(
        result
    );
});

module.exports = router;
