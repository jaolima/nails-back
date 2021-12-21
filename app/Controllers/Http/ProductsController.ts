"use strict";

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
import Products from "App/Models/Product";
export default class ProductsController {
  public async index({}: HttpContextContract) {
    /**
     * @swagger
     * /products:
     *   get:
     *     tags:
     *       - Produtos
     *     summary: Listagem de Produtos
     *     responses:
     *       200:
     *         description: Retorno de produtos
     *         example:
     *           message: [{ lista com produtos }]
     */
    const products = await Products.all();
    return products;
  }

  public async create({request}: HttpContextContract) {
    /**
  * @swagger
  * /products:
  *   post:
  *     tags:
  *       - Produtos
  *     summary: Criação de produto
  *     parameters:
  
  *       - name: name
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *       - name: color
  *         description: Color of product
  *         in: query
  *         required: false
  *         type: string 
  *  
  *       - name: alias_color
  *         description: Color alias of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: description
  *         description: Description of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  *  
  *       - name: qtd
  *         description: Quantitu of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: type
  *         description: Type of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  *       - name: size
  *         description: Size of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *       - name: barcode
  *         description: barcode of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *       - name: price
  *         description: Price of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *     responses:
  *       200:
  *         description: Return a product created
  *         example:
  *           message: { info product}
  */
    const data = request.only(["price", "barcode", "size", "type", "qtd", "description", "color", "alias_color", "name"]);
    const product = await Product.create(data);
    return product;
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
