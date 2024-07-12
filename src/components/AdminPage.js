import React from 'react';
import CategoryForm from './Admin Panel/CategoryForm';
import SubcategoryForm from './Admin Panel/SubcategoryForm';
import SubSubCategoryForm from './Admin Panel/SubSubCategoryForm';
import ContentForm from './Admin Panel/ContentForm';

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <CategoryForm />
      <SubcategoryForm />
      <SubSubCategoryForm />
      <ContentForm />
    </div>
  );
};

export default AdminPage;
