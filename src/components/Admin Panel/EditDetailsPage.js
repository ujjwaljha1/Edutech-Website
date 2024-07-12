// components/EditDetailsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditDetailsPage = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categoryResponse = await axios.get('http://localhost:5000/api/category');
      const subcategoryResponse = await axios.get('http://localhost:5000/api/subcategory');
      const subSubCategoryResponse = await axios.get('http://localhost:5000/api/subsubcategory');
      const contentResponse = await axios.get('http://localhost:5000/api/content');
      setCategories(categoryResponse.data);
      setSubcategories(subcategoryResponse.data);
      setSubSubCategories(subSubCategoryResponse.data);
      setContent(contentResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`/api/${type}/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = async (type, id, newName) => {
    try {
      const updatedData = { name: newName };
      await axios.put(`/api/${type}/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center">
        <span role="img" aria-label="edit">✏️</span> Edit Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Categories Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span role="img" aria-label="categories">📁</span> Categories
          </h2>
          {categories.map(category => (
            <div key={category._id} className="mb-2">
              <input
                type="text"
                defaultValue={category.name}
                className="border p-2 rounded w-full mb-2"
                onBlur={(e) => handleEdit('category', category._id, e.target.value)}
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition duration-200"
                onClick={() => handleDelete('category', category._id)}
              >
                <span role="img" aria-label="delete">❌</span> Delete
              </button>
            </div>
          ))}
        </div>

        {/* Subcategories Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span role="img" aria-label="subcategories">📂</span> Subcategories
          </h2>
          {subcategories.map(subcategory => (
            <div key={subcategory._id} className="mb-2">
              <input
                type="text"
                defaultValue={subcategory.name}
                className="border p-2 rounded w-full mb-2"
                onBlur={(e) => handleEdit('subcategory', subcategory._id, e.target.value)}
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition duration-200"
                onClick={() => handleDelete('subcategory', subcategory._id)}
              >
                <span role="img" aria-label="delete">❌</span> Delete
              </button>
            </div>
          ))}
        </div>

        {/* Sub-Subcategories Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span role="img" aria-label="subsubcategories">🗂️</span> Sub-Subcategories
          </h2>
          {subSubCategories.map(subSubCategory => (
            <div key={subSubCategory._id} className="mb-2">
              <input
                type="text"
                defaultValue={subSubCategory.name}
                className="border p-2 rounded w-full mb-2"
                onBlur={(e) => handleEdit('subsubcategory', subSubCategory._id, e.target.value)}
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition duration-200"
                onClick={() => handleDelete('subsubcategory', subSubCategory._id)}
              >
                <span role="img" aria-label="delete">❌</span> Delete
              </button>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span role="img" aria-label="content">📄</span> Content
          </h2>
          {content.map(item => (
            <div key={item._id} className="mb-2">
              <input
                type="text"
                defaultValue={item.details.title || item.type}
                className="border p-2 rounded w-full mb-2"
                onBlur={(e) => handleEdit('content', item._id, e.target.value)}
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition duration-200"
                onClick={() => handleDelete('content', item._id)}
              >
                <span role="img" aria-label="delete">❌</span> Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditDetailsPage;
