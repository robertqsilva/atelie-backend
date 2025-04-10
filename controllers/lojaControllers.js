const InfoLoja = require("../models/Loja.js");

exports.getInfoLoja = async (req, res) => {
  try {
    const info = await InfoLoja.query().first(); // só traz o primeiro registro
    res.json(info || {}); // caso não tenha nada ainda
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar informações da loja" });
  }
};

exports.upsertInfoLoja = async (req, res) => {
  try {
    const existing = await InfoLoja.query().first();

    let saved;
    if (existing) {
      saved = await InfoLoja.query().patchAndFetchById(existing.id, req.body);
    } else {
      saved = await InfoLoja.query().insert(req.body);
    }

    res.status(200).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar informações da loja" });
  }
};
