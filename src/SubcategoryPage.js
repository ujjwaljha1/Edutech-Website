import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

const SubcategoryPage = () => {
  const { id } = useParams();
  const [subcategory, setSubcategory] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [expandedSubSubCategories, setExpandedSubSubCategories] = useState({});

  useEffect(() => {
    const fetchSubcategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/subcategory/${id}`);
        setSubcategory(response.data);
      } catch (error) {
        console.error('Error fetching subcategory data:', error);
      }
    };

    fetchSubcategoryData();
  }, [id]);

  const toggleSubSubCategory = (subSubCategoryId) => {
    setExpandedSubSubCategories(prev => ({
      ...prev,
      [subSubCategoryId]: !prev[subSubCategoryId]
    }));
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  const renderContent = () => {
    if (!selectedContent) return <p>Select a topic to start learning.</p>;

    switch (selectedContent.type) {
      case 'quiz':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedContent.title}</h3>
            <ul>
              {selectedContent.questions.map((question, index) => (
                <li key={index} className="mb-4">
                  <p className="font-semibold">{question.question}</p>
                  <ul className="ml-4">
                    <li>{question.option1}</li>
                    <li>{question.option2}</li>
                    <li>{question.option3}</li>
                    <li>{question.option4}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'notes':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedContent.title}</h3>
            <p>{selectedContent.description}</p>
            {selectedContent.image && <img src={selectedContent.image} alt="Note illustration" className="my-4" />}
            {selectedContent.video && (
              <video controls className="my-4">
                <source src={selectedContent.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        );
      case 'htmlQuiz':
      case 'htmlNotes':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedContent.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: selectedContent.htmlContent }} />
          </div>
        );
      default:
        return <p>Unsupported content type.</p>;
    }
  };

  if (!subcategory) return <div>Loading...</div>;

  return (
    <div className="flex">
      <aside className="w-1/4 bg-white p-6 rounded-lg shadow-lg h-screen overflow-y-auto">
        <h2 className="font-bold text-2xl mb-4 text-indigo-600">{subcategory.name}</h2>
        <ul className="space-y-2">
          {subcategory.subSubCategories.map((subSubCat) => (
            <li key={subSubCat._id}>
              <button
                onClick={() => toggleSubSubCategory(subSubCat._id)}
                className="w-full text-left p-2 flex items-center justify-between rounded-md hover:bg-gray-100"
              >
                <span>{subSubCat.name}</span>
                {expandedSubSubCategories[subSubCat._id] ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              {expandedSubSubCategories[subSubCat._id] && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4 mt-2 space-y-1"
                >
                  {subSubCat.content.map((item) => (
                    <li key={item._id}>
                      <button
                        onClick={() => handleContentClick(item)}
                        className="w-full text-left p-2 text-sm rounded-md hover:bg-gray-50"
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default SubcategoryPage;