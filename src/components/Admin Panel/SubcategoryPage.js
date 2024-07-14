import React, { useEffect, useState } from "react";
import axios from "axios";

const SubcategoryPage = ({ subcategoryId }) => {
  const [subSubcategories, setSubSubcategories] = useState([]);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const [content, setContent] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [contentDetails, setContentDetails] = useState(null); // State for content details

  useEffect(() => {
    const fetchSubSubcategories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/subsubcategory?subcategoryId=${subcategoryId}`
        );
        setSubSubcategories(response.data);
      } catch (error) {
        console.error("Error fetching sub-subcategories:", error);
      }
    };

    fetchSubSubcategories();
  }, [subcategoryId]);

  const handleSubSubCategoryClick = async (subSubCategoryId) => {
    setSelectedSubSubCategory(subSubCategoryId);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/content?subSubCategoryId=${subSubCategoryId}`
      );
      setContent(response.data);
      setSelectedContent(null);
      setContentDetails(null);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  const handleContentClick = async (contentId, contentType) => {
    setSelectedContent(contentId);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/content/${contentId}/${contentType}`
      );
      setContentDetails(response.data);
    } catch (error) {
      console.error("Error fetching content details:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Subcategories</h1>
      <div className="flex">
        <div className="w-1/4">
          {subSubcategories.map((subSubCategory) => (
            <button
              key={subSubCategory._id}
              onClick={() => handleSubSubCategoryClick(subSubCategory._id)}
              className={`block w-full p-2 mb-2 ${
                selectedSubSubCategory === subSubCategory._id ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {subSubCategory.name}
            </button>
          ))}
        </div>
        <div className="w-3/4">
          {content.map((contentItem) => (
            <button
              key={contentItem._id}
              onClick={() => handleContentClick(contentItem._id, contentItem.type)}
              className="block w-full p-2 mb-2 bg-gray-200"
            >
              {contentItem.title}
            </button>
          ))}
          {contentDetails && contentDetails.type === 'quiz' && (
            <div className="quiz-content p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">{contentDetails.title}</h2>
              {contentDetails.questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold">{question.question}</h3>
                  <ul className="list-disc ml-5">
                    <li>{question.option1}</li>
                    <li>{question.option2}</li>
                    <li>{question.option3}</li>
                    <li>{question.option4}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
          {contentDetails && contentDetails.type === 'notes' && (
            <div className="notes-content p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">{contentDetails.title}</h2>
              {contentDetails.descriptionFormat === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: contentDetails.description }} />
              ) : (
                <p>{contentDetails.description}</p>
              )}
              {contentDetails.image && (
                <img src={`http://localhost:5000/uploads/${contentDetails.image}`} alt={contentDetails.title} />
              )}
              {contentDetails.video && (
                <video controls src={`http://localhost:5000/uploads/${contentDetails.video}`} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;
