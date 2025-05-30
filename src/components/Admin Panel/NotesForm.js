import React, { useState } from 'react';
import axios from 'axios';

const NotesForm = ({ categoryId, subcategoryId, subSubCategoryId, title }) => {
  const [description, setDescription] = useState('');
  const [descriptionFormat, setDescriptionFormat] = useState('text'); // Default to 'text'
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('type', 'notes');
    formData.append('categoryId', categoryId);
    formData.append('subcategoryId', subcategoryId);
    formData.append('subSubCategoryId', subSubCategoryId);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('descriptionFormat', descriptionFormat); // Append descriptionFormat to formData
    if (image) formData.append('image', image);
    if (video) formData.append('video', video);
  
    // Log FormData content
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/content/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Content added successfully:', response.data);
      setDescription('');
      setDescriptionFormat('text'); // Reset to default value
      setImage(null);
      setVideo(null);
    } catch (error) {
      console.error('Error adding content:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <label className="block mb-2">Description Format:</label>
      <select
        value={descriptionFormat}
        onChange={(e) => setDescriptionFormat(e.target.value)}
        className="border p-2 mb-4 w-full"
      >
        <option value="text">Text</option>
        <option value="html">HTML</option>
      </select>
      <label className="block mb-2">Upload Image:</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />
      <label className="block mb-2">Upload Video:</label>
      <input
        type="file"
        onChange={(e) => setVideo(e.target.files[0])}
        className="mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Submit Notes</button>
    </form>
  );
};

export default NotesForm;
