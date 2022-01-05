import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Categories extends BaseSchema {
  protected tableName = "categories";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("id_sub");
      table.integer("id_sub_sub");
      table.timestamps(true);
      table.string("name").notNullable().unique();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
