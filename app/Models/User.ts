import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public name: String

  @column()
  public email: String

  @column()
  public password: String


  @column()
  public uriImage: String

  @column()
  public status: Boolean

  @column()
  public idProfile: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
