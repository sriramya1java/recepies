import { EventEmitter, Injectable } from '@angular/core';
import { Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Stir Fried Lo Mein Noodles',
    'A Super Tasty Recipe',
  'http://www.seriouseats.com/recipes/assets_c/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-thumb-1500xauto-436988.jpg',
   [
     new Ingredient('Noodles', 1),
     new Ingredient('beans', 20)
   ]),
    new Recipe('Italian Pasta',
    'what else you need to say?',
    'http://www.seriouseats.com/recipes/assets_c/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-thumb-1500xauto-436988.jpg',
  [
    new Ingredient('Pasta', 1),
    new Ingredient('carrots', 20)
  ])
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredient(ingredients);
    console.log(ingredients);
  }

}
