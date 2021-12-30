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

  public async store({ request }: HttpContextContract) {
    /**
     * @swagger
     * /subcategories:
     *   post:
     *     tags:
     *       - Sub Categorias
     *     summary: Criação de subcategoria
     *     parameters:
     *       - name: name
     *         description: Name of SubCategory
     *         in: query
     *         required: false
     *         type: string
     *
     *       - name: id
     *         description: id Sub Sub Category
     *         in: query
     *         required: false
     *         type: string
     *
     *     responses:
     *       200:
     *         description: Return a Sub Category created
     *         example:
     *           message: { info category}
     */
    const subCategory = new SubCategory();
    subCategory.name = request.input("name");
    subCategory.subSubCategory = request.input("id");
    subCategory.save();
    return subCategory;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
