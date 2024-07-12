// src/components/SubSubCategoryForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubSubCategoryForm = ({ categories }) => {
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [name, setName] = useState('');
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/subcategory?categoryId=${categoryId}`); // Ensure the URL is correct
          setSubcategories(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/subsubcategory/add', { categoryId, subcategoryId, name }); // Ensure the URL is correct
      setCategoryId('');
      setSubcategoryId('');
      setName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Add Sub-Subcategory</h2>
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
        <select
          value={subcategoryId}
          onChange={(e) => setSubcategoryId(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory._id} value={subcategory._id}>
              {subcategory.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Sub-Subcategory Name"
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Sub-Subcategory
        </button>
      </form>
    </div>
  );
};

export default SubSubCategoryForm;
