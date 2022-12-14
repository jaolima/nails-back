import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Category from "./Category";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public name: string;

  @column()
  public color: string;

  @column()
  public alias_color: string;

  @column()
  public description: string;

  @column()
  public qtd: number;

  @column()
  public type: string;

  @column()
  public size: string;

  @column()
  public barcode: string;

  @column()
  public uri_image: string;

  @column()
  public price: number;

 @column()
  public top_products: boolean;
 
  @column()
  public discount: number;


  @hasMany(() => Category)
  public category: HasMany<typeof Category>;
  
}


