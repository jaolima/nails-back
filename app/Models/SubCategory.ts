import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import SubSubCategory from './SubSubCategory'

export default class SubCategory extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @hasMany(() => SubSubCategory)
  public subSubCategory: HasMany<typeof SubSubCategory>

}
