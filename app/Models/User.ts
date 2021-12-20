import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'


/** 
*  @swagger
*  definitions:
*    User:
*      type: object
*      properties:
*        id:
*          type: uint
*        username:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*      required:
*        - username
*        - email
*        - password
*/
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

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
