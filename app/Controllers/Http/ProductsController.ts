"use strict"

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// const Products = use('App/Models/Product')
export default class ProductsController {
  public async index({}: HttpContextContract) {
    // const products = await Products.all()
    // return products;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
