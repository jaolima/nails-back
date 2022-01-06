"use strict";

import User from "App/Models/User";

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from "@ioc:Adonis/Core/Hash";

class UserController {
  public async index({}: HttpContextContract) {
    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - User
     *     summary: Listagem de User
     *     responses:
     *       200:
     *         description: Retorno de User
     *         example:
     *           message: [{ lista com User }]
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
  *         description: Email
  *         in: query
  *         required: false
  *         type: string 
  * 
  *       - name: password
  *         description: Password
  *         in: query
  *         required: false
  *         type: string 
 
  *  
  *       - name: uriImage
  *         description: Image URI
  *         in: query
  *         required: false
  *         type: string 
 
  * 
  *     responses:
  *       200:
  *         description: Send a user return
  *         example:
  *           message: {user info}
  */
    const user = new User();
    const hashedPassword = await Hash.make(request.input("password"));
    user.name = request.input("name");
    user.email = request.input("email");
    user.password = hashedPassword;
    user.uriImage = request.input("uriImage");
    user.status = true;
    user.save();
    if (user.name) {
      return "User created";
    }
  }

  public async show({ params }: HttpContextContract) {
    /**
     * @swagger
     * /users/<id>:
     *   get:
     *     tags:
     *       - User
     *     summary: Listagem de User
     *     responses:
     *       200:
     *         description: Retorno de User
     *         example:
     *           message: [{ lista com User }]
     */
    const users = await User.findOrFail(params.id);
    return users;
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

module.exports = UserController;
