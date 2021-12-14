import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class SubCategories extends BaseSchema {
  protected tableName = "sub_categories";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.timestamps(true);
      table.string("name").notNullable();
      table
        .integer("id_sub_sub_category")
        .unsigned()
        .references("sub_sub_categories.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
