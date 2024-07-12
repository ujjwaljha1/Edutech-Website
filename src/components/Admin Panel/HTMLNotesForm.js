import React, { useState } from 'react';
import axios from 'axios';

const HTMLNotesForm = ({ categoryId, subcategoryId, subSubCategoryId, title }) => {
  const [htmlContent, setHtmlContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/htmlnotes', {
        title,
        htmlContent,
        categoryId,
        subcategoryId,
        subSubCategoryId,
      });
      console.log('HTML Notes created:', response.data);
      // Reset form or show success message
    } catch (error) {
      console.error('Error creating HTML Notes:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="htmlContent" className="block mb-2 font-medium text-gray-700">HTML Content:</label>
        <textarea
          id="htmlContent"
          value={htmlContent}
          onChange={(e) => setHtmlContent(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full h-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
        Create HTML Notes
      </button>
    </form>
  );
};

export default HTMLNotesForm;