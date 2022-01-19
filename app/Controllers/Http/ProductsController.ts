"use strict";

import Application from "@ioc:Adonis/Core/Application";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
import Products from "App/Models/Product";
import Env from "@ioc:Adonis/Core/Env";
const { v4: uuidv4 } = require("uuid");
// const Helpers = use('Helpers')
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
  public async topProducts({}: HttpContextContract) {
    /**
     * @swagger
     * /:
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
    const products = await Products.query().where("top_products", "true");
    return products;
  }

  public async discount({}: HttpContextContract) {
    const discount = await Products.query().whereNotNull("discount");
    return discount;
  }

  public async store({ request }: HttpContextContract) {
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

    try {
      const product = new Product();
      product.price = request.input("price").required();
      product.barcode = request.input("barcode").required();
      product.size = request.input("size").required();
      // product.type = request.input("type").required();
      product.qtd = request.input("qtd").required();
      product.description = request.input("description").required();
      product.color = request.input("color").required();
      product.alias_color = request.input("alias_color");
      product.name = request.input("name").required();
      product.top_products = request.input("top_products");
      product.discount = request.input("discount");

      const image = request.file("image", { extnames: ["jpg", "png", "gif"] });

      if (image) {
        
        image.fileName = uuidv4();
        product.uri_image =
          Env.get("APP_URL") +
          "uploads/" +
          image.fileName +
          "." +
          image.extname;
        image.move(Application.tmpPath("uploads"), {
          name: image.fileName + "." + image.extname,
        });
      }

      product.save();
      if (!image) {
        return;
      }

      if (!image.isValid) {
        return image.errors;
      }

      if (product.name) {
        return "Product created";
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  public async create({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
