import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";
// import Categories from "Database/migrations/0000000000006_categories";
import Database from "@ioc:Adonis/Lucid/Database";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class CategoriesController {
  /**
   * @swagger
   * /menu:
   *   get:
   *     tags:
   *       - Categorias
   *     summary: Listagem de Categorias
   *     responses:
   *       200:
   *         description: Retorno de Categorias
   *         example:
   *           message: [{ lista com Categorias }]
   */
  public async menu({}: HttpContextContract) {
    const allCategories = await Category.all();
    console.log(allCategories);
    const categories = [
      {
        title: "Shop",
        megaMenu: true,
        megaMenuType: "small",
        type: "sub",

        children: [
          { path: "/", title: "KITS + BUNDLES", type: "link", arrow: false },
          { path: "/", title: "NEW", type: "link", arrow: false },
          { path: "/", title: "COLOR CHART", type: "link", arrow: false },
          { path: "/", title: "SALE", type: "link", arrow: false },
          {
            title: "DIP POWDER",
            type: "sub",
            children: [
              {
                path: "/shop/left_sidebar",
                title: "Dip Starter Kits",
                type: "link",
                icon: "alert",
              },
              {
                path: "/shop/left_sidebar",
                title: "Dip Colors",
                type: "link",
                icon: "layout-accordion-merged",
              },
              {
                path: "/shop/left_sidebar",
                title: "Dip Glow",
                type: "link",
                icon: "layers",
              },
              {
                path: "/shop/left_sidebar",
                title: "Dip Essentials",
                type: "link",
                icon: "write",
              },
            ],
          },

          {
            title: "NAIL ELECTRONICS",
            type: "sub",
            children: [
              {
                path: "/shop/left_sidebar",
                title: "Beyond Pro Drill",
                type: "link",
                icon: "alert",
              },
              {
                path: "/shop/left_sidebar",
                title: "Beyond Pro LED Lamp",
                type: "link",
                icon: "layout-accordion-merged",
              },
              {
                path: "/shop/left_sidebar",
                title: "Drill Bits",
                type: "link",
                icon: "layers",
              },
              {
                path: "/shop/left_sidebar",
                title: "Beyond Pro Accessories",
                type: "link",
                icon: "write",
              },
              {
                path: "/shop/left_sidebar",
                title: "Beyond Home LED Lamp",
                type: "link",
                icon: "map-alt",
              },
            ],
          },
          {
            title: "GEL POLISH",
            type: "sub",
            children: [
              {
                path: "/shop/left_sidebar",
                title: "Gel Colors",
                type: "link",
                icon: "alert",
              },
              {
                path: "/shop/left_sidebar",
                title: "All-in-one Gel Colors",
                type: "link",
                icon: "layers",
              },
              {
                path: "/shop/left_sidebar",
                title: "Gel Effects",
                type: "link",
                icon: "write",
              },
              {
                path: "/shop/left_sidebar",
                title: "Gel Essential",
                type: "link",
                icon: "map-alt",
              },
            ],
          },
          {
            title: "GELLY TIPS",
            type: "sub",
            children: [
              {
                path: "/shop/left_sidebar",
                title: "Gelly Tips Starter Kit",
                type: "link",
                icon: "alert",
              },
              {
                path: "/shop/left_sidebar",
                title: "Gelly Tip Shapes",
                type: "link",
                icon: "layout-accordion-merged",
              },
              {
                path: "/shop/left_sidebar",
                title: "Gelly Essentials",
                type: "link",
                icon: "layers",
              },
            ],
          },
          {
            title: "NAIL LACQUER",
            type: "sub",
            children: [
              {
                path: "/shop/left_sidebar",
                title: "Lacquer Colors",
                type: "link",
                icon: "alert",
              },
              {
                path: "/shop/left_sidebar",
                title: "All-in-one Lacquer Colors",
                type: "link",
                icon: "layout-accordion-merged",
              },
              {
                path: "/shop/left_sidebar",
                title: "Lacquer Essentials",
                type: "link",
                icon: "layers",
              },
            ],
          },
          {
            title: "NAIL ART",
            type: "sub",
            children: [
              {
                path: "/shop/left_sidebar",
                title: "Gel Art",
                type: "link",
                icon: "alert",
              },
              {
                path: "/shop/left_sidebar",
                title: "Rhinestones - Bling It On",
                type: "link",
                icon: "layout-accordion-merged",
              },
              {
                path: "/shop/left_sidebar",
                title: "3D Glitter - Sprinkle On",
                type: "link",
                icon: "layers",
              },
              {
                path: "/shop/left_sidebar",
                title: "Chrome - Rub On",
                type: "link",
                icon: "write",
              },
              {
                path: "/shop/left_sidebar",
                title: "Holo - Rub On",
                type: "link",
                icon: "map-alt",
              },
              {
                path: "/shop/left_sidebar",
                title: "Mermaid - Rub On",
                type: "link",
                icon: "map-alt",
              },
              {
                path: "/shop/left_sidebar",
                title: "Nail Art Essentials",
                type: "link",
                icon: "map-alt",
              },
            ],
          },
        ],
      },
    ];
    return categories;
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      /**
  * @swagger
  * /categories:
  *   post:
  *     tags:
  *       - Categorias
  *     summary: Criação de categoria
  *     parameters:
  
  *       - name: name
  *         description: Name of Category
  *         in: query
  *         required: false
  *         type: string 
  *   
  *       - name: idSubCategory
  *         description: id of Sub Category
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *     responses:
  *       200:
  *         description: Return a category created
  *         example:
  *           message: { info category}
  */
      const validation = schema.create({
        name: schema.string({ trim: true }),
        // subCategory: schema.number(),
      });
      const payload = await request.validate({ schema: validation });

      console.log(payload)

      const category = new Category();
      category.name = request.input("name");
      // category.subCategory = request.input("idSubCategory") || [];
      category.save();
      return category;
    } catch (error) {
      response.badRequest(error.messages);
    }
  }

  public async index({}: HttpContextContract) {
    /**
  * @swagger
  * /categories:
  *   post:
  *     tags:
  *       - Categorias
  *     summary: Criação de categoria
  *     parameters:
  
  *       - name: name
  *         description: Name of Category
  *         in: query
  *         required: false
  *         type: string 
  * 
  * 
  *     responses:
  *       200:
  *         description: Return a category created
  *         example:
  *           message: { info category}
  */
    // Category.all();
    var categories = Database.from("categories")
      .select("*")
      .whereNull("id_sub")
      .whereNull("id_sub_sub");
    return categories;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
