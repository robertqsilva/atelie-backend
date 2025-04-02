const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get('/', (req, res) => res.send('API REST FULL ONLINE'))

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

router.get("/categories", (req, res) => {
    res.json(["Vestidos","Saias","Blusas","Calças", "Acessórios"]);
});

module.exports = router;
