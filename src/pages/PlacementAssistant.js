// PlacementAssistant.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';

const PlacementAssistant = () => {
  const [formType, setFormType] = useState("");
  const [savedPlacements, setSavedPlacements] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    startDate: "",
    endDate: "",
    companyUrl: "",
    companyDetails: "",
    jobDescription: "",
    applicationUrl: "",
    companyLocation: "",
    workMode: "",
    workHours: "",
    jobLocations: "",
    companyEmail: "",
    graduatingBatches: '',
    experienceRequired: "",
    additionalDetails: "",
    images: [],
    imageLinks: [],
    video: "",
    isHtml: false,
  });

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/placement');
      setSavedPlacements(response.data);
    } catch (error) {
      console.error('Error fetching placements:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/placement/${id}`);
      fetchPlacements();
    } catch (error) {
      console.error('Error deleting placement:', error);
    }
  };

  const handleEdit = (placement) => {
    setFormData(placement);
    setEditingId(placement._id);
    setFormType('PlacementDetails');
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const handleImageLinkAdd = () => {
    setFormData({ ...formData, imageLinks: [...formData.imageLinks, ""] });
  };

  const handleImageLinkChange = (index, value) => {
    const newImageLinks = [...formData.imageLinks];
    newImageLinks[index] = value;
    setFormData({ ...formData, imageLinks: newImageLinks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'images') {
        formData[key].forEach(image => formDataToSend.append('images', image));
      } else if (key === 'imageLinks') {
        formDataToSend.append('imageLinks', JSON.stringify(formData[key]));
      } else if (key === 'graduatingBatches') {
        // Convert comma-separated string to array and trim whitespace
        const batchesArray = formData[key].split(',').map(batch => batch.trim());
        formDataToSend.append('graduatingBatches', JSON.stringify(batchesArray));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/placement/${editingId}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('http://localhost:5000/api/placement', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      console.log('Placement details submitted/updated');
      fetchPlacements();
      setFormData({ /* reset form data */ });
      setEditingId(null);
    } catch (error) {
      console.error('Error submitting/updating placement details:', error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Placement Assistant</h1>
      {!formType && (
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => setFormType("PlacementDetails")}
          >
            Placement Details
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => {
              setFormType("HTMLPlacementDetails");
              setFormData({ ...formData, isHtml: true });
            }}
          >
            HTML Placement Details
          </button>
        </div>
      )}
      {formType === "HTMLPlacementDetails" && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p className="font-bold">Warning:</p>
          <p>
            When entering HTML content, please use proper HTML tags. For
            example:
            <br />
            &lt;p&gt;This is a paragraph.&lt;/p&gt;
            <br />
            &lt;ul&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;List item 1&lt;/li&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;List item 2&lt;/li&gt;
            <br />
            &lt;/ul&gt;
          </p>
        </div>
      )}
      {formType && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Last date of applications (leave blank if unknown)"
          />
          <input
            type="url"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleInputChange}
            placeholder="Company URL"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="companyDetails"
            value={formData.companyDetails}
            onChange={handleInputChange}
            placeholder="Company Details"
            className="w-full p-2 border rounded"
            rows="3"
          />
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            placeholder="Job Description"
            className="w-full p-2 border rounded"
            rows="5"
            required
          />
          <div>
            <label className="block mb-2">Graduating Batches:</label>
            <input
              type="text"
              name="graduatingBatches"
              value={formData.graduatingBatches}
              onChange={handleInputChange}
              placeholder="Enter years separated by commas (e.g., 2023, 2024, 2025)"
              className="w-full p-2 border rounded"
            />
            <p className="text-sm text-gray-600 mt-1">
              Enter multiple years separated by commas if applicable.
            </p>
          </div>
          <input
            type="url"
            name="applicationUrl"
            value={formData.applicationUrl}
            onChange={handleInputChange}
            placeholder="Application URL"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="companyLocation"
            value={formData.companyLocation}
            onChange={handleInputChange}
            placeholder="Company Home Location"
            className="w-full p-2 border rounded"
          />
          <select
            name="workMode"
            value={formData.workMode}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Work Mode</option>
            <option value="online">Online</option>
            <option value="hybrid">Hybrid</option>
            <option value="offline">Offline</option>
          </select>
          {formData.workMode === "online" && (
            <input
              type="number"
              name="workHours"
              value={formData.workHours}
              onChange={handleInputChange}
              placeholder="Work Hours per Day"
              className="w-full p-2 border rounded"
            />
          )}
          {(formData.workMode === "hybrid" ||
            formData.workMode === "offline") && (
            <input
              type="text"
              name="jobLocations"
              value={formData.jobLocations}
              onChange={handleInputChange}
              placeholder="Job Locations (comma-separated)"
              className="w-full p-2 border rounded"
            />
          )}
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleInputChange}
            placeholder="Company Email (if known)"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="experienceRequired"
            value={formData.experienceRequired}
            onChange={handleInputChange}
            placeholder="Experience Required"
            className="w-full p-2 border rounded"
            rows="3"
          />

          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleInputChange}
            placeholder="Additional Details (optional)"
            className="w-full p-2 border rounded"
            rows="3"
          />
          <div>
            <label className="block mb-2">Upload Images:</label>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="w-full p-2 border rounded"
              accept="image/*"
            />
          </div>

          <div>
            <label className="block mb-2">Image Links:</label>
            {formData.imageLinks.map((link, index) => (
              <input
                key={index}
                type="url"
                value={link}
                onChange={(e) => handleImageLinkChange(index, e.target.value)}
                placeholder="Image URL"
                className="w-full p-2 border rounded mb-2"
              />
            ))}
            <button
              type="button"
              onClick={handleImageLinkAdd}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Add Image Link
            </button>
          </div>

          <div>
            <label className="block mb-2">Video Link (optional):</label>
            <input
              type="url"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              placeholder="Video URL"
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      )}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Saved Placements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPlacements.map((placement) => (
            <div key={placement._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{placement.companyName}</h3>
                <p className="text-gray-600 mb-4">Start: {format(new Date(placement.startDate), 'PPP')}</p>
                <p className="text-gray-600 mb-4">End: {placement.endDate ? format(new Date(placement.endDate), 'PPP') : 'Ongoing'}</p>
                <p className="text-sm text-gray-500 mb-4">{placement.jobDescription.substring(0, 100)}...</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(placement)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(placement._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementAssistant;