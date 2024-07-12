// src/components/SubCategoryForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SubCategoryForm = ({ categories }) => {
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/subcategory/add', { categoryId, name }); // Ensure the URL is correct
      setCategoryId('');
      setName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Add Subcategory</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Subcategory Name"
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Subcategory
        </button>
      </form>
    </div>
  );
};

export default SubCategoryForm;
