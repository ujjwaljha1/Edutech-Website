// src/pages/EditDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditDetailsPage from '../components/Admin Panel/EditDetailsPage';

const EditDetails = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/category/${id}`);
      setCategories(categories.filter(category => category._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Edit Details</h1>
      <EditDetailsPage/>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category._id} className="p-4 border rounded shadow">
            {category.name}
            <button onClick={() => handleDelete(category._id)} className="bg-red-500 text-white p-2 mt-2">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditDetails;
