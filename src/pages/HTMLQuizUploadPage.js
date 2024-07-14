// HTMLQuizUploadPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const HTMLQuizUploadPage = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [subSubCategoryId, setSubSubCategoryId] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categoryId) {
      fetchSubcategories(categoryId);
    }
  }, [categoryId]);

  useEffect(() => {
    if (subcategoryId) {
      fetchSubSubCategories(subcategoryId);
    }
  }, [subcategoryId]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubcategories = async (catId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/subcategory?categoryId=${catId}`
      );
      setSubcategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const fetchSubSubCategories = async (subCatId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/subsubcategory?subcategoryId=${subCatId}`
      );
      setSubSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching sub-subcategories:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!file || !categoryId || !subcategoryId || !subSubCategoryId) {
  //       setMessage('Please select all required fields and a file to upload');
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append('jsonFile', file);
  //     formData.append('categoryId', categoryId);
  //     formData.append('subcategoryId', subcategoryId);
  //     formData.append('subSubCategoryId', subSubCategoryId);

  //     try {
  //       const response = await axios.post('http://localhost:5000/api/htmlquizjson/upload', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });
  //       setMessage('HTML Quiz JSON uploaded successfully');
  //     } catch (error) {
  //       setMessage('Error uploading HTML Quiz JSON: ' + error.response.data.message);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !categoryId || !subcategoryId || !subSubCategoryId) {
      setMessage("Please select all required fields and a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("jsonFile", file);
    formData.append("categoryId", categoryId);
    formData.append("subcategoryId", subcategoryId);
    formData.append("subSubCategoryId", subSubCategoryId);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/htmlquizjson/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("HTML Quiz JSON uploaded and saved successfully");
    } catch (error) {
      setMessage(
        "Error uploading HTML Quiz JSON: " + error.response.data.message
      );
    }
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upload HTML Quiz JSON</h1>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
        <p className="font-bold">HTML Quiz JSON Structure Guidelines:</p>
        <p>
          The JSON file should contain an array of quiz objects with the
          following structure:
        </p>
        <pre className="bg-gray-100 p-2 mt-2 mb-2 overflow-x-auto">
          {`[
  {
    "title": "Quiz Title",
    "questions": [
      {
        "questionText": "Question text goes here",
        "questionHeader": "Choose the correct answer",
        "answers": [
          {
            "answerText": "Answer option 1",
            "isCorrectAnswer": false
          },
          {
            "answerText": "Answer option 2",
            "isCorrectAnswer": true
          },
          // ... more answer options
        ]
      },
      // ... more questions
    ]
  },
  // ... more quizzes
]`}
        </pre>
        <p>
          Ensure that your JSON file follows this structure for successful
          upload.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Select Category:</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Select Subcategory:</label>
          <select
            value={subcategoryId}
            onChange={(e) => setSubcategoryId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Select Sub-Subcategory:</label>
          <select
            value={subSubCategoryId}
            onChange={(e) => setSubSubCategoryId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Sub-Subcategory</option>
            {subSubCategories.map((subSubCategory) => (
              <option key={subSubCategory._id} value={subSubCategory._id}>
                {subSubCategory.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Select JSON File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".json"
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Upload HTML Quiz JSON
        </button>
      </form>
      {message && <p className="mt-4 text-center font-semibold">{message}</p>}
    </div>
  );
};

export default HTMLQuizUploadPage;
