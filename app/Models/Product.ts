import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime  

  @column()
  public name: string

  @column()
  public color: string

  @column()
  public description: string

  @column()
  public qtd: number

  @column()
  public type: string

  @column()
  public size: string

  @column()
  public barcode: string

  @column()
  public uriImage: string

  @column()
  public price: number

  @hasOne(() => Category)
  public category: HasOne<typeof Category>
}
