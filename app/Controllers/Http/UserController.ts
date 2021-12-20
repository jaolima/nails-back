"use strict";

import User from "App/Models/User";

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

class UserController {
  public async index({}: HttpContextContract) {
    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - Usuarios
     *     summary: Listagem de Usuarios
     *     responses:
     *       200:
     *         description: Retorno de Usuarios
     *         example:
     *           message: [{ lista com Usuarios }]
     */
    const properties = User.all();
    return properties;
  }

  public async store({ request }: HttpContextContract) {
    /**
  * @swagger
  * /users:
  *   post:
  *     tags:
  *       - User
  *     summary: Sample API
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string 
  * 
  *       - name: email
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string 
  * 
  *       - name: password
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string 
 
  *  
  *       - name: uriImage
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string 
 
  * 
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */
    // const data = request.only(["name", "email", "password", "uriImage"]);
    const user = new User();
    // return user;
    user.name = request.input("name");
    user.email = request.input("email");
    user.password = request.input("password");
    user.uriImage = request.input("uriImage");
    user.status = true;
    user.save();
    return user;
  }

  public async show({ params }: HttpContextContract) {
    /**
     * @swagger
     * /users/<id>:
     *   get:
     *     tags:
     *       - Usuarios
     *     summary: Listagem de Usuario
     *     responses:
     *       200:
     *         description: Retorno de Usuario
     *         example:
     *           message: [{ lista com Usuario }]
     */
    const users = await User.findOrFail(params.id);
    return users;
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

module.exports = UserController;