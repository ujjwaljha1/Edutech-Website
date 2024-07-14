// SubSubCategoryPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubSubCategoryPage = () => {
  const { subcategoryId } = useParams();
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchSubSubCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/subsubcategory?subcategoryId=${subcategoryId}`);
        setSubSubCategories(response.data);
      } catch (error) {
        console.error("Error fetching sub-subcategories:", error);
      }
    };

    fetchSubSubCategories();
  }, [subcategoryId]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Sub-Subcategories</h1>
      <div className="accordion">
        {subSubCategories.map((subSubCategory, index) => (
          <div key={subSubCategory._id} className="mb-4 border-b">
            <button
              className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {subSubCategory.name}
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white">
                <p>Details about {subSubCategory.name}</p>
                {/* Add more detailed content here */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSubCategoryPage;
