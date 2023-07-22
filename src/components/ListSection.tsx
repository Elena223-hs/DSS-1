import React, { useState } from 'react';
import Recipe from '../interfaces';
import recipeData from '../data/recipes.json';



const ListSection: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>(() => {
      const parsedRecipes: Recipe[] = recipeData.map((recipe) => ({
        ...recipe,
        publicationDate: new Date(recipe.publicationDate),
      }));
      return parsedRecipes;
    });

//const ListSection: React.FC = () => {
  //const [recipes, setRecipes] = useState<Recipe[]>(recipeData as Recipe[]);


  const handleDeleteRecipe = (id: number) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="list-section">
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <p>ID: {recipe.id}</p>
            <p>Name: {recipe.name}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Publication Date: {recipe.publicationDate.toLocaleDateString()}</p>

            <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
