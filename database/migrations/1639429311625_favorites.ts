import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Favorites extends BaseSchema {
  protected tableName = "favorites";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.timestamps(true);
      table.integer("id_product").unsigned().references("products.id");
      table.integer("id_user").unsigned().references("users.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
