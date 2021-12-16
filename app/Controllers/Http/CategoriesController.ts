import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    const categories = await Category.all()
    
    const cats =  categories.map(cat => {
      return [
       { title: cat.name, type: 'sub', children: [
         { path: '/shop/left_sidebar', title: 'Dip Starter Kits', type: 'link', icon: 'alert' },
          { path: '/shop/left_sidebar', title: 'Dip Colors', type: 'link', icon: 'layout-accordion-merged' },
          { path: '/shop/left_sidebar', title: 'Dip Glow', type: 'link', icon: 'layers' },
          { path: '/shop/left_sidebar', title: 'Dip Essentials', type: 'link', icon: 'write' },
       ]
       }
      ]
    })
  
    
    // [
    //     {
    //        title: 'Shop', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
            
    //         })
    //         ]
    //       }
    //     ]
   
           
    // TO DO: retornar a lista de categorias e subcategorias
    const categoriesJson =[
      {
         title: 'Shop', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
            {
               title: 'DIP POWDER', type: 'sub', children: [
                  { path: '/shop/left_sidebar', title: 'Dip Starter Kits', type: 'link', icon: 'alert' },
                  { path: '/shop/left_sidebar', title: 'Dip Colors', type: 'link', icon: 'layout-accordion-merged' },
                  { path: '/shop/left_sidebar', title: 'Dip Glow', type: 'link', icon: 'layers' },
                  { path: '/shop/left_sidebar', title: 'Dip Essentials', type: 'link', icon: 'write' },
               ]
            },
            {
               title: 'NAIL ELECTRONICS', type: 'sub', children: [
                  { path: '/shop/left_sidebar', title: 'Beyond Pro Drill', type: 'link', icon: 'alert' },
                  { path: '/shop/left_sidebar', title: 'Beyond Pro LED Lamp', type: 'link', icon: 'layout-accordion-merged' },
                  { path: '/shop/left_sidebar', title: 'Drill Bits', type: 'link', icon: 'layers' },
                  { path: '/shop/left_sidebar', title: 'Beyond Pro Accessories', type: 'link', icon: 'write' },
                  { path: '/shop/left_sidebar', title: 'Beyond Home LED Lamp', type: 'link', icon: 'map-alt' },
               ]
            },
            {
               title: 'GEL POLISH', type: 'sub', children: [
                  { path: '/shop/left_sidebar', title: 'Gel Colors', type: 'link', icon: 'alert' },
                  { path: '/shop/left_sidebar', title: 'All-in-one Gel Colors', type: 'link', icon: 'layers' },
                  { path: '/shop/left_sidebar', title: 'Gel Effects', type: 'link', icon: 'write' },
                  { path: '/shop/left_sidebar', title: 'Gel Essential', type: 'link', icon: 'map-alt' },
               ]
            },
            {
               title: 'GELLY TIPS', type: 'sub', children: [
                  { path: '/shop/left_sidebar', title: 'Gelly Tips Starter Kit', type: 'link', icon: 'alert' },
                  { path: '/shop/left_sidebar', title: 'Gelly Tip Shapes', type: 'link', icon: 'layout-accordion-merged' },
                  { path: '/shop/left_sidebar', title: 'Gelly Essentials', type: 'link', icon: 'layers' },
               ]
            },
            {
               title: 'NAIL LACQUER', type: 'sub', children: [
                  { path: '/shop/left_sidebar', title: 'Lacquer Colors', type: 'link', icon: 'alert' },
                  { path: '/shop/left_sidebar', title: 'All-in-one Lacquer Colors', type: 'link', icon: 'layout-accordion-merged' },
                  { path: '/shop/left_sidebar', title: 'Lacquer Essentials', type: 'link', icon: 'layers' },
               ]
            },
            {
               title: 'NAIL ART', type: 'sub', children: [
                  { path: '/shop/left_sidebar', title: 'Gel Art', type: 'link', icon: 'alert' },
                  { path: '/shop/left_sidebar', title: 'Rhinestones - Bling It On', type: 'link', icon: 'layout-accordion-merged' },
                  { path: '/shop/left_sidebar', title: '3D Glitter - Sprinkle On', type: 'link', icon: 'layers' },
                  { path: '/shop/left_sidebar', title: 'Chrome - Rub On', type: 'link', icon: 'write' },
                  { path: '/shop/left_sidebar', title: 'Holo - Rub On', type: 'link', icon: 'map-alt' },
                  { path: '/shop/left_sidebar', title: 'Mermaid - Rub On', type: 'link', icon: 'map-alt' },
                  { path: '/shop/left_sidebar', title: 'Nail Art Essentials', type: 'link', icon: 'map-alt' },
               ]
            },
         ]
      },
      { path: '/', title: 'KITS + BUNDLES', type: 'link', arrow: false },
      { path: '/', title: 'NEW', type: 'link', arrow: false },
      { path: '/', title: 'COLOR CHART', type: 'link', arrow: false },
      { path: '/', title: 'SALE', type: 'link', arrow: false },
   
   ];
   
    return cats;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
