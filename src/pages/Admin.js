// src/pages/Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryForm from '../components/Admin Panel/CategoryForm';
import SubCategoryForm from '../components/Admin Panel/SubcategoryForm';
import SubSubCategoryForm from '../components/Admin Panel/SubSubCategoryForm';
import ContentForm from '../components/Admin Panel/ContentForm';

const Admin = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/category');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <CategoryForm onCategoryAdded={fetchCategories} />
      <hr className="my-4" />
      <SubCategoryForm categories={categories} onSubCategoryAdded={fetchCategories} />
      <hr className="my-4" />
      <SubSubCategoryForm categories={categories} onSubSubCategoryAdded={fetchCategories} />
      <hr className="my-4" />
      <ContentForm categories={categories} />
    </div>
  );
};

export default Admin;
