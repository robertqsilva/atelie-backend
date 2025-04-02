require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const db = require("./database/knex");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

