const { Model } = require("objection");

class InfoLoja extends Model {
  static get tableName() {
    return "info_loja";
  }
}

module.exports = InfoLoja;
