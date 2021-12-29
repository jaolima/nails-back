import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class SubSubCategories extends BaseSchema {
  protected tableName = "sub_sub_categories";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.timestamps(true);
      table.string("name").notNullable().unique();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
