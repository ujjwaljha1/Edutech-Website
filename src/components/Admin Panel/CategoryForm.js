import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = ({ onCategoryAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/category/add', { name });
      setName('');
      onCategoryAdded(response.data); // Assuming this function handles adding the new category locally
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
