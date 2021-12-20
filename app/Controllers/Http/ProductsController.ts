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
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  *  
  *       - name: alias_color
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: description
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  *  
  *       - name: qtd
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: type
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  *  
  *       - name: type
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: size
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: barcode
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  
  *       - name: price
  *         description: Name of product
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
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
