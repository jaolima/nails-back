import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SubCategory from "App/Models/SubCategory";

export default class SubCategoriesController {
  public async index({}: HttpContextContract) {
    /**
     * @swagger
     * /subcategories:
     *   get:
     *     tags:
     *       - Sub Categorias
     *     summary: Listagem de Usuario
     *     responses:
     *       200:
     *         description: Retorno de Categorias
     *         example:
     *           message: [{ lista com Categorias }]
     */
    const subCategories = await SubCategory.all();
    return subCategories;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
