import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizForm from './QuizForm';
import NotesForm from './NotesForm';
import HTMLQuizForm from './HTMLQuizForm';
import HTMLNotesForm from './HTMLNotesForm';

const ContentForm = ({ categories }) => {
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [subSubCategoryId, setSubSubCategoryId] = useState('');
  const [type, setType] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [notesTitle, setNotesTitle] = useState('');
  const [showHtmlWarning, setShowHtmlWarning] = useState(false);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/subcategory?categoryId=${categoryId}`);
          setSubcategories(response.data);
        } catch (error) {
          console.error('Error fetching subcategories:', error);
        }
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  useEffect(() => {
    const fetchSubSubCategories = async () => {
      if (subcategoryId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/subsubcategory?subcategoryId=${subcategoryId}`);
          setSubSubCategories(response.data);
        } catch (error) {
          console.error('Error fetching sub-subcategories:', error);
        }
      }
    };

    fetchSubSubCategories();
  }, [subcategoryId]);

  const handleSubcategoryChange = (e) => {
    setSubcategoryId(e.target.value);
    setSubSubCategoryId('');
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setShowHtmlWarning(e.target.value === 'htmlQuiz' || e.target.value === 'htmlNotes');
  };

  const renderForm = () => {
    switch (type) {
      case 'quiz':
        return <QuizForm categoryId={categoryId} subcategoryId={subcategoryId} subSubCategoryId={subSubCategoryId} />;
      case 'notes':
        return (
          <>
            <label className="block mb-2">Notes Title:</label>
            <input
              type="text"
              value={notesTitle}
              onChange={(e) => setNotesTitle(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <NotesForm
              categoryId={categoryId}
              subcategoryId={subcategoryId}
              subSubCategoryId={subSubCategoryId}
              title={notesTitle}
            />
          </>
        );
      // case 'htmlQuiz':
      //   return (
      //     <>
      //       {showHtmlWarning && (
      //         <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
      //           <p className="font-bold">HTML Quiz Guidelines:</p>
      //           <ul className="list-disc pl-5">
      //             <li>Use &lt;math&gt; tags for mathematical formulas: <code>&lt;math&gt;x^2 + y^2 = z^2&lt;/math&gt;</code></li>
      //             <li>Use &lt;h1&gt; for the main title: <code>&lt;h1&gt;Quiz Title&lt;/h1&gt;</code></li>
      //             <li>Structure options as an unordered list: <code>&lt;ul&gt;&lt;li&gt;Option 1&lt;/li&gt;&lt;/ul&gt;</code></li>
      //             <li>Link images using relative paths: <code>&lt;img src="/images/example.jpg" alt="Description"&gt;</code></li>
      //           </ul>
      //         </div>
      //       )}
      //       <HTMLQuizForm categoryId={categoryId} subcategoryId={subcategoryId} subSubCategoryId={subSubCategoryId} />
      //     </>
      //   );
      // case 'htmlNotes':
      //   return (
      //     <>
      //       {showHtmlWarning && (
      //         <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
      //           <p className="font-bold">HTML Notes Guidelines:</p>
      //           <ul className="list-disc pl-5">
      //             <li>Use semantic HTML tags for structure: &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;</li>
      //             <li>Use &lt;h1&gt; to &lt;h6&gt; for headings in hierarchical order</li>
      //             <li>Use &lt;p&gt; tags for paragraphs</li>
      //             <li>Use &lt;code&gt; tags for inline code snippets</li>
      //             <li>Use &lt;pre&gt;&lt;code&gt; for code blocks</li>
      //             <li>Use &lt;ul&gt; or &lt;ol&gt; for lists</li>
      //             <li>Link images using relative paths: <code>&lt;img src="/images/example.jpg" alt="Description"&gt;</code></li>
      //           </ul>
      //         </div>
      //       )}
      //       <label className="block mb-2">HTML Notes Title:</label>
      //       <input
      //         type="text"
      //         value={notesTitle}
      //         onChange={(e) => setNotesTitle(e.target.value)}
      //         className="border p-2 mb-4 w-full"
      //       />
      //       <HTMLNotesForm
      //         categoryId={categoryId}
      //         subcategoryId={subcategoryId}
      //         subSubCategoryId={subSubCategoryId}
      //         title={notesTitle}
      //       />
      //     </>
      //   );
      case 'htmlQuiz':
        return (
          <>
            {showHtmlWarning && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                <p className="font-bold">HTML Quiz Guidelines:</p>
                <p>Here's an example of how to structure an HTML quiz:</p>
                <pre className="bg-gray-100 p-2 mt-2 mb-2 overflow-x-auto">
{`<h1>Advanced Web Development Quiz</h1>

<p>Test your knowledge of web development concepts.</p>

<h2>Question 1</h2>
<p>What does the following code do?</p>

<pre><code>
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
};
</code></pre>

<ul>
  <li>A) Implements a debounce function</li>
  <li>B) Creates a memoization wrapper</li>
  <li>C) Sets up a recursive function</li>
  <li>D) Defines a generator function</li>
</ul>

<h2>Question 2</h2>
<p>What is the output of this code?</p>

<pre><code>console.log(typeof typeof 1);</code></pre>

<ul>
  <li>A) "number"</li>
  <li>B) "string"</li>
  <li>C) "undefined"</li>
  <li>D) "object"</li>
</ul>

<h2>Question 3</h2>
<p>What does this CSS selector target?</p>

<pre><code>div:not(:first-child):not(:last-child)</code></pre>

<ul>
  <li>A) All div elements except the first and last</li>
  <li>B) Only the second div element</li>
  <li>C) All div elements that are not children</li>
  <li>D) The first and last div elements</li>
</ul>`}
                </pre>
                <p>Key points:</p>
                <ul className="list-disc pl-5">
                  <li>Use &lt;h1&gt; for the quiz title</li>
                  <li>Use &lt;h2&gt; for each question</li>
                  <li>Use &lt;pre&gt;&lt;code&gt; for code snippets</li>
                  <li>Use &lt;ul&gt; and &lt;li&gt; for answer options</li>
                  <li>For math formulas, use &lt;math&gt; tags: <code>&lt;math&gt;x^2 + y^2 = z^2&lt;/math&gt;</code></li>
                  <li>For images: <code>&lt;img src="/images/example.jpg" alt="Description"&gt;</code></li>
                </ul>
              </div>
            )}
            <HTMLQuizForm categoryId={categoryId} subcategoryId={subcategoryId} subSubCategoryId={subSubCategoryId} />
          </>
        );
      case 'htmlNotes':
        return (
          <>
            {showHtmlWarning && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                <p className="font-bold">HTML Notes Guidelines:</p>
                <p>Here's an example of how to structure HTML notes:</p>
                <pre className="bg-gray-100 p-2 mt-2 mb-2 overflow-x-auto">
{`<h1>Introduction to Web Development</h1>

<p>Web development is the process of creating websites and web applications.</p>

<hr/>

<h2>Front-end Development</h2>

<p>Front-end development focuses on the user interface and experience.</p>

<img src="/images/frontend.jpg" alt="Front-end Development Diagram" />

<pre><code>
// Example of a JavaScript function
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('Web Developer');
</code></pre>

<video width="320" height="240" controls>
  <source src="/videos/web-dev-intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<hr/>

<h2>Advanced Mathematics in Web Development</h2>

<p>Here's an example of the Fourier Transform equation:</p>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>F</mi>
    <mo stretchy="false">(</mo>
    <mi>ω</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msubsup>
      <mo>∫</mo>
      <mrow>
        <mo>−</mo>
        <mi>∞</mi>
      </mrow>
      <mi>∞</mi>
    </msubsup>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>t</mi>
    <mo stretchy="false">)</mo>
    <msup>
      <mi>e</mi>
      <mrow>
        <mo>−</mo>
        <mi>i</mi>
        <mi>ω</mi>
        <mi>t</mi>
      </mrow>
    </msup>
    <mi>d</mi>
    <mi>t</mi>
  </mrow>
</math>`}
                </pre>
                <p>Key points:</p>
                <ul className="list-disc pl-5">
                  <li>Use semantic HTML tags: &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;</li>
                  <li>Use &lt;h1&gt; to &lt;h6&gt; for headings in hierarchical order</li>
                  <li>Use &lt;p&gt; tags for paragraphs</li>
                  <li>Use &lt;pre&gt;&lt;code&gt; for code blocks</li>
                  <li>Use &lt;img&gt; for images with relative paths</li>
                  <li>Use &lt;video&gt; for embedding videos</li>
                  <li>Use &lt;math&gt; tags for complex mathematical formulas</li>
                  <li>Use &lt;hr/&gt; for horizontal rules to separate sections</li>
                </ul>
              </div>
            )}
            <label className="block mb-2">HTML Notes Title:</label>
            <input
              type="text"
              value={notesTitle}
              onChange={(e) => setNotesTitle(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <HTMLNotesForm
              categoryId={categoryId}
              subcategoryId={subcategoryId}
              subSubCategoryId={subSubCategoryId}
              title={notesTitle}
            />
          </>
        );
      case 'json':
        return (
          <form onSubmit={handleJsonSubmit}>
            <label className="block mb-2">Upload JSON File:</label>
            <input type="file" onChange={handleJsonChange} className="mb-4" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">Upload JSON</button>
          </form>
        );
      default:
        return null;
    }
  };

  const handleJsonSubmit = (e) => {
    e.preventDefault();
    // Implement JSON upload functionality
  };

  const handleJsonChange = (e) => {
    // Handle JSON file selection
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Add Content</h2>
      <form className="mb-6">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Select Category:</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Select Subcategory:</label>
          <select
            value={subcategoryId}
            onChange={handleSubcategoryChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Select Sub-Subcategory:</label>
          <select
            value={subSubCategoryId}
            onChange={(e) => setSubSubCategoryId(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Sub-Subcategory</option>
            {subSubCategories.map((subSubCategory) => (
              <option key={subSubCategory._id} value={subSubCategory._id}>
                {subSubCategory.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Select Content Type:</label>
          <select
            value={type}
            onChange={handleTypeChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Content Type</option>
            <option value="quiz">Quiz</option>
            <option value="notes">Notes</option>
            <option value="htmlQuiz">HTML Quiz</option>
            <option value="htmlNotes">HTML Notes</option>
            <option value="json">JSON</option>
          </select>
        </div>
      </form>
      {renderForm()}
    </div>
  );
};

export default ContentForm;
