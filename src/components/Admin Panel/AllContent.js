// Modify HomePage.js to handle subcategory click and navigate to SubcategoryPage

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubcategoryPage from "./SubcategoryPage";

const Allcontent = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/category");
        const categoriesWithSubcategories = await Promise.all(
          response.data.map(async (category) => {
            const subcategoriesResponse = await axios.get(
              `http://localhost:5000/api/subcategory?categoryId=${category._id}`
            );
            return { ...category, subcategories: subcategoriesResponse.data };
          })
        );
        setCategories(categoriesWithSubcategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubcategoryClick = (subcategoryId) => {
    navigate(`/SubcategoryPage/${subcategoryId}`);
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category._id} className="relative group">
            <div className="border p-4 rounded-lg shadow-md bg-white transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ul className="py-2">
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory._id}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                      onClick={() => handleSubcategoryClick(subcategory._id)}
                    >
                      {subcategory.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allcontent;
