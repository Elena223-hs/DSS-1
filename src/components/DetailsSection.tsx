import React, { useState } from 'react';
import Recipe from '../interfaces';

interface DetailsSectionProps {
  selectedRecipe: Recipe | null;
  onSave: (recipe: Recipe) => void;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ selectedRecipe, onSave }) => {
  const [formData, setFormData] = useState<Recipe | null>(selectedRecipe);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData!,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    if (formData) {
      onSave(formData);
    }
  };

  return (
    <section className="content-details">
      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          id="field1" // Add the ID for field1
          className="field1" // Add the field1 class
          value={formData?.title || ''}
          onChange={handleFormChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={formData?.description || ''}
          onChange={handleFormChange}
        />
        {/* Add more input fields for ingredients and instructions */}
        <button type="button" id="saveButton" onClick={handleSaveClick}>
          Save
        </button>
        <button type="button" id="clearButton" onClick={() => setFormData(null)}>
          Clear
        </button>
      </form>
    </section>
  );
};

export default DetailsSection;
