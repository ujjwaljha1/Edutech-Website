import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
const Hackathons = () => {
  const [formType, setFormType] = useState("");
  const [savedHackathons, setSavedHackathons] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    steps: [],
    organizationType: "",
    organizationName: "",
    organizationAddress: "",
    organizationEmail: "",
    organizationDescription: "",
    founder: "",
    nirfRanking: "",
    establishedYear: "",
    description: "",
    rules: [],
    applyLink: "",
    images: [],
    additionalInfo: [],
    video: "",
    isHtml: false,
  });

  useEffect(() => {
    fetchHackathons();
  }, []);

  const fetchHackathons = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/hackathon");
      setSavedHackathons(response.data);
    } catch (error) {
      console.error("Error fetching hackathons:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/hackathon/${id}`);
      fetchHackathons();
    } catch (error) {
      console.error("Error deleting hackathon:", error);
    }
  };

  const handleEdit = (hackathon) => {
    setFormData(hackathon);
    setEditingId(hackathon._id);
    setFormType("Hackathons");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStepChange = (index, field, value) => {
    const newSteps = [...formData.steps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setFormData({ ...formData, steps: newSteps });
  };

  const handleRuleChange = (index, value) => {
    const newRules = [...formData.rules];
    newRules[index] = { description: value };
    setFormData({ ...formData, rules: newRules });
  };

  const handleAdditionalInfoChange = (index, field, value) => {
    const newAdditionalInfo = [...formData.additionalInfo];
    newAdditionalInfo[index] = { ...newAdditionalInfo[index], [field]: value };
    setFormData({ ...formData, additionalInfo: newAdditionalInfo });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData[key].forEach((image) =>
          formDataToSend.append("images", image)
        );
      } else if (["steps", "rules", "additionalInfo"].includes(key)) {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
        if (editingId) {
          await axios.put(`http://localhost:5000/api/hackathon/${editingId}`, formDataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        } else {
          await axios.post('http://localhost:5000/api/hackathon', formDataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        }
        console.log('Hackathon submitted/updated');
        fetchHackathons();
        setFormData({ /* reset form data */ });
        setEditingId(null);
      } catch (error) {
        console.error('Error submitting/updating hackathon:', error);
      }
    };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hackathons</h1>
      {!formType && (
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-colors"
            onClick={() => setFormType("Hackathons")}
          >
            Hackathons
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            onClick={() => {
              setFormType("HTMLHackathons");
              setFormData({ ...formData, isHtml: true });
            }}
          >
            HTML Hackathons
          </button>
        </div>
      )}
      {formType === "HTMLHackathons" && (
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
            <br />
            To link an image: &lt;img src="https://example.com/image.jpg"
            alt="Description" /&gt;
            <br />
            To add a link: &lt;a href="https://example.com"&gt;Link
            text&lt;/a&gt;
          </p>
        </div>
      )}
      {formType && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex space-x-4">
            <input
              type="datetime-local"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-1/2 p-2 border rounded"
              required
            />
            <input
              type="datetime-local"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-1/2 p-2 border rounded"
              placeholder="End Date (leave blank if unknown)"
            />
          </div>

          <div>
            <label className="block mb-2">Number of Steps:</label>
            <input
              type="number"
              min="1"
              value={formData.steps.length}
              onChange={(e) => {
                const newSteps = Array(parseInt(e.target.value))
                  .fill()
                  .map((_, i) => formData.steps[i] || {});
                setFormData({ ...formData, steps: newSteps });
              }}
              className="w-full p-2 border rounded"
            />
          </div>

          {formData.steps.map((step, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-bold mb-2">Step {index + 1}</h3>
              <input
                type="text"
                value={step.subtitle || ""}
                onChange={(e) =>
                  handleStepChange(index, "subtitle", e.target.value)
                }
                placeholder="Subtitle"
                className="w-full p-2 border rounded mb-2"
              />
              <textarea
                value={step.description || ""}
                onChange={(e) =>
                  handleStepChange(index, "description", e.target.value)
                }
                placeholder="Description"
                className="w-full p-2 border rounded mb-2"
              />
              <div className="flex space-x-4">
                <input
                  type="datetime-local"
                  value={step.startDate || ""}
                  onChange={(e) =>
                    handleStepChange(index, "startDate", e.target.value)
                  }
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="datetime-local"
                  value={step.endDate || ""}
                  onChange={(e) =>
                    handleStepChange(index, "endDate", e.target.value)
                  }
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <input
                type="url"
                value={step.link || ""}
                onChange={(e) =>
                  handleStepChange(index, "link", e.target.value)
                }
                placeholder="Link (optional)"
                className="w-full p-2 border rounded mt-2"
              />
            </div>
          ))}

          <div>
            <label className="block mb-2">Organization Type:</label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Organization Type</option>
              <option value="company">Company</option>
              <option value="institute">Institute</option>
            </select>
          </div>

          {formData.organizationType && (
            <div className="space-y-4">
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
                placeholder={`${
                  formData.organizationType === "company"
                    ? "Company"
                    : "Institute"
                } Name`}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="organizationAddress"
                value={formData.organizationAddress}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="organizationEmail"
                value={formData.organizationEmail}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="organizationDescription"
                value={formData.organizationDescription}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="founder"
                value={formData.founder}
                onChange={handleInputChange}
                placeholder="Founder"
                className="w-full p-2 border rounded"
              />
              {formData.organizationType === "institute" && (
                <>
                  <input
                    type="text"
                    name="nirfRanking"
                    value={formData.nirfRanking}
                    onChange={handleInputChange}
                    placeholder="NIRF Ranking"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="establishedYear"
                    value={formData.establishedYear}
                    onChange={handleInputChange}
                    placeholder="Established Year"
                    className="w-full p-2 border rounded"
                  />
                </>
              )}
            </div>
          )}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Hackathon Description"
            className="w-full p-2 border rounded"
          />

          <div>
            <label className="block mb-2">Number of Rules:</label>
            <input
              type="number"
              min="1"
              value={formData.rules.length}
              onChange={(e) => {
                const newRules = Array(parseInt(e.target.value))
                  .fill()
                  .map((_, i) => formData.rules[i] || {});
                setFormData({ ...formData, rules: newRules });
              }}
              className="w-full p-2 border rounded"
            />
          </div>

          {formData.rules.map((rule, index) => (
            <div key={index} className="border p-4 rounded">
              <textarea
                value={rule.description || ""}
                onChange={(e) => handleRuleChange(index, e.target.value)}
                placeholder={`Rule ${index + 1}`}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}

          <input
            type="url"
            name="applyLink"
            value={formData.applyLink}
            onChange={handleInputChange}
            placeholder="Apply Link"
            className="w-full p-2 border rounded"
          />

          <div>
            <label className="block mb-2">Upload Images:</label>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Number of Additional Info:</label>
            <input
              type="number"
              min="1"
              value={formData.additionalInfo.length}
              onChange={(e) => {
                const newAdditionalInfo = Array(parseInt(e.target.value))
                  .fill()
                  .map((_, i) => formData.additionalInfo[i] || {});
                setFormData({ ...formData, additionalInfo: newAdditionalInfo });
              }}
              className="w-full p-2 border rounded"
            />
          </div>

          {formData.additionalInfo.map((info, index) => (
            <div key={index} className="border p-4 rounded">
              <input
                type="text"
                value={info.key || ""}
                onChange={(e) =>
                  handleAdditionalInfoChange(index, "key", e.target.value)
                }
                placeholder={`Info ${index + 1} Key`}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                value={info.value || ""}
                onChange={(e) =>
                  handleAdditionalInfoChange(index, "value", e.target.value)
                }
                placeholder={`Info ${index + 1} Value`}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}

          <input
            type="url"
            name="video"
            value={formData.video}
            onChange={handleInputChange}
            placeholder="Video URL"
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      )}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Saved Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedHackathons.map((hackathon) => (
            <div key={hackathon._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{hackathon.title}</h3>
                <p className="text-gray-600 mb-4">{format(new Date(hackathon.startDate), 'PPP')} - {hackathon.endDate ? format(new Date(hackathon.endDate), 'PPP') : 'Ongoing'}</p>
                <p className="text-sm text-gray-500 mb-4">{hackathon.description.substring(0, 100)}...</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(hackathon)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(hackathon._id)}
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

export default Hackathons;