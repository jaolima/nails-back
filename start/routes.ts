/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  // Route.get("products/:id_category", "ProductsController.productsByCategory");
  Route.get("topproducts", "ProductsController.topProducts");
  Route.get("discount", "ProductsController.discount");
  Route.resource("products", "ProductsController");
  Route.resource("categories", "CategoriesController");
  Route.resource("subCategories", "SubCategoriesController");
  Route.resource("subSubCategories", "SubSubCategoriesController");
  Route.resource("users", "UserController");
  Route.resource("favorites", "FavoritesController");
  Route.resource("sales", "SalesController");
  Route.get("menu", "CategoriesController.menu");
  Route.post("sessions", "SessionController.create");
 
  
});

// Route.group(() => {

// }).middleware('auth')
