import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Products extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.timestamps(true);
      table.string("name").notNullable();
      table.string("color").notNullable();
      table.string("description").notNullable();
      table.integer("qtd").notNullable();
      table.string("type").notNullable();
      table.string("size");
      table.string("barcode").notNullable();
      table.string("uri_image").notNullable();
      table.double("price").notNullable();
      table.integer("id_category").unsigned().references("categories.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
