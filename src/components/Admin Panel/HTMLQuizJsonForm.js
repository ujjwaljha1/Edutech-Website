// HTMLQuizJsonForm.js
import React, { useState } from 'react';
import axios from 'axios';

const HTMLQuizJsonForm = ({ categoryId, subcategoryId, subSubCategoryId }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('jsonFile', file);
    formData.append('categoryId', categoryId);
    formData.append('subcategoryId', subcategoryId);
    formData.append('subSubCategoryId', subSubCategoryId);

    try {
      const response = await axios.post('http://localhost:5000/api/htmlquizjson/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('HTML Quiz JSON uploaded successfully');
    } catch (error) {
      setMessage('Error uploading HTML Quiz JSON: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Upload HTML Quiz JSON</h3>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        <p className="font-bold">HTML Quiz JSON Structure Guidelines:</p>
        <p>The JSON file should contain an array of quiz objects with the following structure:</p>
        <pre className="bg-gray-100 p-2 mt-2 mb-2 overflow-x-auto">
{`[
  {
    "title": "Quiz Title",
    "categoryId": "category_id",
    "subcategoryId": "subcategory_id",
    "subSubCategoryId": "sub_subcategory_id",
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
        <p>Ensure that your JSON file follows this structure for successful upload.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Select JSON File:</label>
          <input type="file" onChange={handleFileChange} accept=".json" className="w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
          Upload HTML Quiz JSON
        </button>
      </form>
      {message && <p className="mt-4 text-center font-semibold">{message}</p>}
    </div>
  );
};

export default HTMLQuizJsonForm;