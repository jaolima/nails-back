import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Product from "./Product";
import User from "./User";

export default class Favorite extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @hasMany(() => Product)
  public products: HasMany<typeof Product>;

  @hasMany(() => User)
  public users: HasMany<typeof User>;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
