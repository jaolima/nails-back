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

  public async productsByCategory({ params }: HttpContextContract) {
    /**
     * @swagger
     * /products/<id_category>:
     *   get:
     *     tags:
     *       - Produtos
     *     summary: Listagem de Produtos por categoria
     *     responses:
     *       200:
     *         description: Retorno de produtos
     *         example:
     *           message: [{ lista com produtos }]
     */
    const products = await Products.query().where("id_category", params.id_category);
    return products;
  }

  public async discount({}: HttpContextContract) {
    const discount = await Products.query().whereNotNull("discount");
    return discount;
  }

  public async store({ request, response }: HttpContextContract) {
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
      product.price = request.input("price");
      product.barcode = request.input("barcode");
      product.size = request.input("size");
      product.type = request.input("type");
      product.qtd = request.input("qtd");
      product.description = request.input("description");
      product.color = request.input("color");
      product.alias_color = request.input("alias_color");
      product.name = request.input("name");
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
      await product.save();
     
      if (!image) {
        return;
      }

      if (!image.isValid) {
        return response.status(401).json(image.errors);
      }

      if (product.name) {
        console.log(product)
        return "Product created";
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  public async create({}: HttpContextContract) {}

  public  async show ({ params }) {
    const product = await Products.findOrFail(params.id)
  
    // await product.load('images')
  
    return product
  }
  

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    const data = request.only([
      'price',
      'barcode',
      'size',
      'type',
      'qtd',
      'description',
      'color',
      'alias_color',
      'name',
      'top_products',
      'discount'
    ])
    console.log(data)
    
    product.merge(data)
  
    await product.save()
  
    return "Product has been updated"
  }

  public async destroy({}: HttpContextContract) {}
}
