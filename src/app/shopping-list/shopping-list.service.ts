import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
 public ingredientChanged = new EventEmitter<Ingredient[]>();

  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientChanged.emit(this.ingredients.slice());
     event.preventDefault();
  }

  addIngredient(ingredientsArray) {
     for (const ingredient1 of ingredientsArray){
      this.addIngredients(ingredient1);
    }
   /* console.log( this.ingredients);
   this.ingredients.push(...ingredientsArray);
   console.log( this.ingredients); */
   // this.ingredientChanged.emit(this.ingredients.slice());
  }
}
