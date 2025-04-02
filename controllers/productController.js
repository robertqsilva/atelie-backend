const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const products = await Product.query();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.query().findById(req.params.id);
  if (!product)
    return res.status(404).json({ error: "Produto não encontrado" });
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const newProduct = await Product.query().insert(req.body);
  res.status(201).json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const updatedProduct = await Product.query().patchAndFetchById(
    req.params.id,
    req.body
  );
  if (!updatedProduct)
    return res.status(404).json({ error: "Produto não encontrado" });
  res.json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
  const deleted = await Product.query().deleteById(req.params.id);
  if (!deleted)
    return res.status(404).json({ error: "Produto não encontrado" });
  res.json({ success: true });
};
