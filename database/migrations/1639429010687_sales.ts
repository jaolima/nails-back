import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Sales extends BaseSchema {
  protected tableName = "sales";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.timestamps(true);
      table.json("id_products");
      table.double("value").notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
