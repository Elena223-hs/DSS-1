import React, { useState } from 'react';
import Recipe from '../interfaces';

const DetailsSection: React.FC = () => {
  // State to hold the current recipe being edited
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>({
    id: 0,
    name: '',
    ingredients: '',
    instructions: '',
    cookingTime: 0,
    publicationDate: new Date(),
  });

  // Function to handle input field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // Function to handle form submission (saving the recipe)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the logic to save/update the recipe
    // You can access the currentRecipe state to get the updated recipe data
    // Update the recipe list and/or other state as needed
    // Reset the form fields or perform any necessary cleanup
    setCurrentRecipe({
      id: 0,
      name: '',
      ingredients: '',
      instructions: '',
      cookingTime: 0,
      publicationDate: new Date(),
    });
  };

  // Function to handle form clearing
  const handleFormClear = () => {
    setCurrentRecipe({
      id: 0,
      name: '',
      ingredients: '',
      instructions: '',
      cookingTime: 0,
      publicationDate: new Date(),
    });
  };

  return (
    <div className="details-section">
      <h2>Recipe Details</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={currentRecipe.name} onChange={handleInputChange} required />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={currentRecipe.ingredients} onChange={handleInputChange} required />

        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" value={currentRecipe.instructions} onChange={handleInputChange} required />

        <label htmlFor="cookingTime">Cooking Time:</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={currentRecipe.cookingTime}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Save</button>
        <button type="button" onClick={handleFormClear}>Clear</button>
      </form>
    </div>
  );
};

export default DetailsSection;
