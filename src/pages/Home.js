import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category._id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
