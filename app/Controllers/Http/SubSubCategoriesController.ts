import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SubSubCategory from "App/Models/SubSubCategory";

export default class SubSubCategoriesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

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
     *         description: Name of SubSubCategory
     *         in: query
     *         required: false
     *         type: string
     *
     *       - name: id
     *         description: id of SubCategory
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
  
    const subSubCategory = new SubSubCategory();
    subSubCategory.name = request.input("name");
    subSubCategory.id = request.input("id");
    subSubCategory.save();
    return subSubCategory;
  
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
