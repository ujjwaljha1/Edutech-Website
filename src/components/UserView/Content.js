

// import React, { useState, useEffect } from 'react';
// import { FaBook, FaQuestionCircle, FaSearch } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


// const categories = {
//   Introduction: {
//     subcategories: [
//       {
//         title: 'What is Python?',
//         type: 'Notes',
//         content: {
//           description: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages worldwide. It's versatile, used in web development, data analysis, artificial intelligence, and more. Python's syntax allows developers to express concepts in fewer lines of code than languages like C++ or Java. Its extensive standard library and third-party packages make it suitable for a wide range of applications. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Its 'batteries included' philosophy means it comes with a comprehensive set of tools and libraries out of the box, making it an excellent choice for beginners and experienced programmers alike. 🐍💻🚀",
//           image: 'https://example.com/python-intro.jpg',
//           video: 'https://example.com/python-intro.mp4',
//           code: `print("Hello, World!")
// name = input("What's your name? ")
// print(f"Welcome to Python, {name}!")`,
//         },
//       },
//       {
//         title: 'Installation Guide',
//         type: 'Notes',
//         content: {
//           description: "Installing Python is the first step in your programming journey. The process is straightforward and can be done on various operating systems. For Windows, visit python.org and download the latest version. Run the installer, ensuring you check the 'Add Python to PATH' option. On macOS, you can use Homebrew by running 'brew install python' in the terminal. Linux users often have Python pre-installed, but you can update it using your distribution's package manager. After installation, verify by opening a command prompt or terminal and typing 'python --version'. To enhance your development experience, consider installing an Integrated Development Environment (IDE) like PyCharm or Visual Studio Code. These tools provide features like code completion, debugging, and project management, making your coding process more efficient and enjoyable. 🖥️🔧📦",
//           image: 'https://example.com/python-install.jpg',
//           video: 'https://example.com/python-install.mp4',
//           code: `# Check Python version
// python --version

// # Run Python interactively
// python

// # Run a Python script
// python your_script.py`,
//         },
//       },
//     ],
//   },
//   'If-Else': {
//     subcategories: [
//       {
//         title: 'Basic If-Else Statements',
//         type: 'Notes',
//         content: {
//           description: "If-else statements are fundamental to control flow in Python. They allow your program to make decisions based on conditions. The basic structure includes an 'if' clause followed by a condition, then a block of code to execute if the condition is true. Optionally, you can add an 'else' clause to specify what happens when the condition is false. Python also supports 'elif' (else if) for multiple conditions. Remember to use proper indentation, as it defines the code blocks in Python. These statements are crucial for creating dynamic and responsive programs that can adapt to different scenarios and user inputs. 🔀⚖️🤔",
//           image: 'https://example.com/if-else.jpg',
//           video: 'https://example.com/if-else.mp4',
//           code: `age = 18
// if age >= 18:
//     print("You are an adult.")
// else:
//     print("You are a minor.")

// # Multiple conditions
// score = 85
// if score >= 90:
//     print("A")
// elif score >= 80:
//     print("B")
// elif score >= 70:
//     print("C")
// else:
//     print("D")`,
//         },
//       },
//       {
//         title: 'If-Else Quiz',
//         type: 'Quiz',
//         content: {
//           questions: [
//             {
//               question: "What is the correct syntax for an if-else statement in Python?",
//               options: [
//                 'if (condition): else:',
//                 'if condition: else:',
//                 'if condition else:',
//                 'if: else:'
//               ],
//               correctAnswer: 1,
//             },
//             {
//               question: "Which keyword is used for an alternative condition in Python?",
//               options: ['otherwise', 'elseif', 'elif', 'alternate'],
//               correctAnswer: 2,
//             },
//             {
//               question: "What is the purpose of the 'else' clause in an if-else statement?",
//               options: [
//                 'To check an additional condition',
//                 'To execute code when the if condition is true',
//                 'To execute code when the if condition is false',
//                 'To end the if-else block'
//               ],
//               correctAnswer: 2,
//             },
//             {
//               question: "How do you write an inline if-else statement in Python?",
//               options: [
//                 'x = 1 if y == 1 else 2',
//                 'x = (y == 1) ? 1 : 2',
//                 'if y == 1: x = 1 else: x = 2',
//                 'x = 1 when y == 1 otherwise 2'
//               ],
//               correctAnswer: 0,
//             },
//             {
//               question: "What happens if you omit the 'else' clause in an if statement?",
//               options: [
//                 'The code will not compile',
//                 'It becomes a syntax error',
//                 'Nothing, the code will run normally without an alternative action',
//                 'The program will always execute the if block'
//               ],
//               correctAnswer: 2,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   'For-Loops': {
//     subcategories: [
//       {
//         title: 'Introduction to For Loops',
//         type: 'Notes',
//         content: {
//           description: "For loops in Python are used to iterate over a sequence (such as a list, tuple, string, or range) or other iterable objects. They provide a concise way to repeat a block of code a specific number of times or for each item in a collection. The basic syntax of a for loop includes the 'for' keyword, a variable to represent each item in the sequence, the 'in' keyword, and the sequence to iterate over. Python's for loops are more similar to foreach loops in other languages, as they directly iterate over the elements rather than using an index. This makes them particularly easy to use and read. For loops can be combined with the 'range()' function to iterate a specific number of times, or with 'enumerate()' to get both the index and value of each item in a sequence. 🔁📊🔢",
//           image: 'https://example.com/for-loops.jpg',
//           video: 'https://example.com/for-loops.mp4',
//           code: `# Iterating over a list
// fruits = ['apple', 'banana', 'cherry']
// for fruit in fruits:
//     print(fruit)

// # Using range()
// for i in range(5):
//     print(i)

// # Enumerate example
// for index, value in enumerate(fruits):
//     print(f"Index {index}: {value}")`,
//         },
//       },
//       {
//         title: 'For Loops Quiz',
//         type: 'Quiz',
//         content: {
//           questions: [
//             {
//               question: "What is the purpose of a for loop in Python?",
//               options: [
//                 'To make decisions in code',
//                 'To iterate over a sequence or collection',
//                 'To define functions',
//                 'To import modules'
//               ],
//               correctAnswer: 1,
//             },
//             {
//               question: "Which function is commonly used with for loops to iterate a specific number of times?",
//               options: ['iterate()', 'sequence()', 'range()', 'loop()'],
//               correctAnswer: 2,
//             },
//             {
//               question: "What does the 'enumerate()' function do in a for loop?",
//               options: [
//                 'It counts the number of iterations',
//                 'It reverses the order of iteration',
//                 'It provides both the index and value of each item',
//                 'It skips every other item in the sequence'
//               ],
//               correctAnswer: 2,
//             },
//             {
//               question: "How do you exit a for loop prematurely in Python?",
//               options: ['exit()', 'break', 'continue', 'return'],
//               correctAnswer: 1,
//             },
//             {
//               question: "What is the output of the following code?\nfor i in range(3, 7):\n    print(i)",
//               options: ['3 4 5 6 7', '3 4 5 6', '4 5 6', '3 4 5'],
//               correctAnswer: 1,
//             },
//           ],
//         },
//       },
//     ],
//   },
// };

// const hackathons = [
//   {
//     title: 'Python Hackathon 2024',
//     imageUrl: 'https://dummyimage.com/600x400/ccc/000.jpg&text=Python+Hackathon',
//   },
//   {
//     title: 'AI & ML Hackfest',
//     imageUrl: 'https://example.com/ai-ml-hackfest.jpg',
//   },
//   {
//     title: 'Web Dev Challenge',
//     imageUrl: 'https://example.com/web-dev-challenge.jpg',
//   },
// ];

// const placements = [
//   {
//     title: 'Google Summer Internship',
//     imageUrl: 'data:image/jpeg;base64,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',
//   },
//   {
//     title: 'Microsoft Graduate Program',
//     imageUrl: 'https://example.com/microsoft-graduate.jpg',
//   },
//   {
//     title: 'Amazon SDE Role',
//     imageUrl: 'https://example.com/amazon-sde.jpg',
//   },
// ];

// const Content = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//   const [showAnswers, setShowAnswers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCategories, setFilteredCategories] = useState(categories);

//   useEffect(() => {
//     const filtered = Object.keys(categories).reduce((acc, category) => {
//       const matchingSubcategories = categories[category].subcategories.filter(
//         subcat => subcat.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       if (matchingSubcategories.length > 0) {
//         acc[category] = { ...categories[category], subcategories: matchingSubcategories };
//       }
//       return acc;
//     }, {});
//     setFilteredCategories(filtered);
//   }, [searchTerm]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(null);
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//     setShowAnswers(new Array(subcategory.content.questions?.length || 0).fill(false));
//   };

//   const toggleAnswer = (index) => {
//     setShowAnswers(prev => (
//       prev.map((value, questionIndex) => (
//         questionIndex === index ? !value : value
//       ))
//     ));
//   };

//   const renderContent = () => {
//     if (!selectedSubcategory) return (
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="text-gray-600 text-center text-xl mt-10"
//       >
//         Please select a subcategory to start learning.
//       </motion.p>
//     );

//     const { type, content } = selectedSubcategory;

//     if (type === 'Notes') {
//       return (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-6"
//         >
//           <h3 className="text-3xl font-bold text-indigo-600">{selectedSubcategory.title}</h3>
//           <p className="text-gray-700 text-lg leading-relaxed">{content.description}</p>
//           <img src={content.image} alt={selectedSubcategory.title} className="rounded-lg shadow-lg w-full object-cover h-64" />
//           <div className="relative pt-56.25%">
//             <video 
//               controls 
//               className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
//               poster={content.image}
//             >
//               <source src={content.video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
//             <h4 className="text-xl font-semibold mb-4 text-indigo-600">Code Example:</h4>
//             <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
//               <code>{content.code}</code>
//             </pre>
//           </div>
//         </motion.div>
//       );
//     } else if (type === 'Quiz') {
//       return (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-6"
//         >
//           <h3 className="text-3xl font-bold text-indigo-600 mb-6">{selectedSubcategory.title}</h3>
//           {content.questions.map((q, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-6 rounded-lg shadow-lg"
//             >
//               <p className="font-semibold text-xl mb-4">Q{index + 1}: {q.question}</p>
//               <ul className="list-none space-y-2 mb-4">
//                 {q.options.map((option, optionIndex) => (
//                   <li key={optionIndex} className="flex items-center">
//                     <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
//                       {String.fromCharCode(97 + optionIndex)}
//                     </span>
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//               <button 
//                 onClick={() => toggleAnswer(index)}
//                 className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
//               >
//                 {showAnswers[index] ? 'Hide Answer' : 'Show Answer'}
//               </button>
//               {showAnswers[index] && (
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-4 text-green-600 font-semibold text-lg"
//                 >
//                   Correct Answer: {String.fromCharCode(97 + q.correctAnswer)}) {q.options[q.correctAnswer]}
//                 </motion.p>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>
//       );
//     }

//     return <p className="text-gray-600">No content available.</p>;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col">
//       <main className="flex-grow flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6">
//         <aside className="w-full h-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg lg:h-[calc(100vh-10rem)] flex flex-col">
//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search topics..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mb-4 text-indigo-600">Categories</h2>
//           <div className="overflow-y-auto flex-grow">
//             <ul className="space-y-2">
//               {Object.keys(filteredCategories).map((category) => (
//                 <li key={category}>
//                   <button
//                     onClick={() => handleCategoryClick(category)}
//                     className={`w-full text-left p-3 rounded-lg transition duration-300 ${
//                       selectedCategory === category ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                   {selectedCategory === category && (
//                     <ul className="ml-4 mt-2 space-y-1">
//                       {filteredCategories[category].subcategories.map((subcat, index) => (
//                         <li key={index}>
//                           <button
//                             onClick={() => handleSubcategoryClick(subcat)}
//                             className={`w-full text-left p-2 rounded-md text-sm transition duration-300 ${
//                               selectedSubcategory === subcat ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
//                             }`}
//                           >
//                             {subcat.type === 'Notes' && <FaBook className="inline mr-2" />}
//                             {subcat.type === 'Quiz' && <FaQuestionCircle className="inline mr-2" />}
//                             {subcat.title}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//         <section className="flex-1 bg-white p-8 rounded-lg shadow-lg overflow-y-auto lg:h-[calc(100vh-10rem)]">
//           {renderContent()}
//         </section>
//         <aside className="w-full lg:w-1/4 space-y-6 lg:h-[calc(100vh-10rem)] flex flex-col">
//           <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
//             <h2 className="font-bold text-2xl mb-4 text-indigo-600">Hackathons</h2>
//             <Carousel
//               showArrows={true}
//               showStatus={false}
//               showThumbs={false}
//               infiniteLoop={true}
//               autoPlay={true}
//               interval={5000}
//               className="rounded-lg overflow-hidden"
//             >
//               {hackathons.map((item, index) => (
//                 <div key={index} className="relative h-64">
//                   <img src={item.imageUrl} alt={item.title} className="w-full h-full object-fit" />
//                   <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//                     <h3 className="text-xl font-semibold">{item.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
//             <h2 className="font-bold text-2xl mb-4 text-indigo-600">Placements</h2>
//             <Carousel
//               showArrows={true}
//               showStatus={false}
//               showThumbs={false}
//               infiniteLoop={true}
//               autoPlay={true}
//               interval={5000}
//               className="rounded-lg overflow-hidden"
//             >
//               {placements.map((item, index) => (
//                 <div key={index} className="relative h-64">
//                   <img src={item.imageUrl} alt={item.title} className="w-full h-full object-fit" />
//                   <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//                     <h3 className="text-xl font-semibold">{item.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default Content;


import React, { useState, useEffect } from 'react';
import { FaBook, FaQuestionCircle, FaSearch, FaChevronRight, FaExclamationTriangle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const categories = {
  Introduction: {
    subcategories: [
      {
        title: 'What is Python?',
        type: 'Notes',
        content: {
          description: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages worldwide. It's versatile, used in web development, data analysis, artificial intelligence, and more. Python's syntax allows developers to express concepts in fewer lines of code than languages like C++ or Java. Its extensive standard library and third-party packages make it suitable for a wide range of applications. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Its 'batteries included' philosophy means it comes with a comprehensive set of tools and libraries out of the box, making it an excellent choice for beginners and experienced programmers alike. 🐍💻🚀",
          image: 'https://example.com/python-intro.jpg',
          video: 'https://example.com/python-intro.mp4',
          code: `print("Hello, World!")
name = input("What's your name? ")
print(f"Welcome to Python, {name}!")`,
        },
      },
      {
        title: 'Installation Guide',
        type: 'Notes',
        content: {
          description: "Installing Python is the first step in your programming journey. The process is straightforward and can be done on various operating systems. For Windows, visit python.org and download the latest version. Run the installer, ensuring you check the 'Add Python to PATH' option. On macOS, you can use Homebrew by running 'brew install python' in the terminal. Linux users often have Python pre-installed, but you can update it using your distribution's package manager. After installation, verify by opening a command prompt or terminal and typing 'python --version'. To enhance your development experience, consider installing an Integrated Development Environment (IDE) like PyCharm or Visual Studio Code. These tools provide features like code completion, debugging, and project management, making your coding process more efficient and enjoyable. 🖥️🔧📦",
          image: 'https://example.com/python-install.jpg',
          video: 'https://example.com/python-install.mp4',
          code: `# Check Python version
python --version

# Run Python interactively
python

# Run a Python script
python your_script.py`,
        },
      },
    ],
  },
  'If-Else': {
    subcategories: [
      {
        title: 'Basic If-Else Statements',
        type: 'Notes',
        content: {
          description: "If-else statements are fundamental to control flow in Python. They allow your program to make decisions based on conditions. The basic structure includes an 'if' clause followed by a condition, then a block of code to execute if the condition is true. Optionally, you can add an 'else' clause to specify what happens when the condition is false. Python also supports 'elif' (else if) for multiple conditions. Remember to use proper indentation, as it defines the code blocks in Python. These statements are crucial for creating dynamic and responsive programs that can adapt to different scenarios and user inputs. 🔀⚖️🤔",
          image: 'https://example.com/if-else.jpg',
          video: 'https://example.com/if-else.mp4',
          code: `age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")

# Multiple conditions
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("D")`,
        },
      },
      {
        title: 'If-Else Quiz',
        type: 'Quiz',
        content: {
          questions: [
            {
              question: "What is the correct syntax for an if-else statement in Python?",
              options: [
                'if (condition): else:',
                'if condition: else:',
                'if condition else:',
                'if: else:'
              ],
              correctAnswer: 1,
            },
            {
              question: "Which keyword is used for an alternative condition in Python?",
              options: ['otherwise', 'elseif', 'elif', 'alternate'],
              correctAnswer: 2,
            },
            {
              question: "What is the purpose of the 'else' clause in an if-else statement?",
              options: [
                'To check an additional condition',
                'To execute code when the if condition is true',
                'To execute code when the if condition is false',
                'To end the if-else block'
              ],
              correctAnswer: 2,
            },
            {
              question: "How do you write an inline if-else statement in Python?",
              options: [
                'x = 1 if y == 1 else 2',
                'x = (y == 1) ? 1 : 2',
                'if y == 1: x = 1 else: x = 2',
                'x = 1 when y == 1 otherwise 2'
              ],
              correctAnswer: 0,
            },
            {
              question: "What happens if you omit the 'else' clause in an if statement?",
              options: [
                'The code will not compile',
                'It becomes a syntax error',
                'Nothing, the code will run normally without an alternative action',
                'The program will always execute the if block'
              ],
              correctAnswer: 2,
            },
          ],
        },
      },
    ],
  },
  'For-Loops': {
    subcategories: [
      {
        title: 'Introduction to For Loops',
        type: 'Notes',
        content: {
          description: "For loops in Python are used to iterate over a sequence (such as a list, tuple, string, or range) or other iterable objects. They provide a concise way to repeat a block of code a specific number of times or for each item in a collection. The basic syntax of a for loop includes the 'for' keyword, a variable to represent each item in the sequence, the 'in' keyword, and the sequence to iterate over. Python's for loops are more similar to foreach loops in other languages, as they directly iterate over the elements rather than using an index. This makes them particularly easy to use and read. For loops can be combined with the 'range()' function to iterate a specific number of times, or with 'enumerate()' to get both the index and value of each item in a sequence. 🔁📊🔢",
          image: 'https://example.com/for-loops.jpg',
          video: 'https://example.com/for-loops.mp4',
          code: `# Iterating over a list
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)

# Using range()
for i in range(5):
    print(i)

# Enumerate example
for index, value in enumerate(fruits):
    print(f"Index {index}: {value}")`,
        },
      },
      {
        title: 'For Loops Quiz',
        type: 'Quiz',
        content: {
          questions: [
            {
              question: "What is the purpose of a for loop in Python?",
              options: [
                'To make decisions in code',
                'To iterate over a sequence or collection',
                'To define functions',
                'To import modules'
              ],
              correctAnswer: 1,
            },
            {
              question: "Which function is commonly used with for loops to iterate a specific number of times?",
              options: ['iterate()', 'sequence()', 'range()', 'loop()'],
              correctAnswer: 2,
            },
            {
              question: "What does the 'enumerate()' function do in a for loop?",
              options: [
                'It counts the number of iterations',
                'It reverses the order of iteration',
                'It provides both the index and value of each item',
                'It skips every other item in the sequence'
              ],
              correctAnswer: 2,
            },
            {
              question: "How do you exit a for loop prematurely in Python?",
              options: ['exit()', 'break', 'continue', 'return'],
              correctAnswer: 1,
            },
            {
              question: "What is the output of the following code?\nfor i in range(3, 7):\n    print(i)",
              options: ['3 4 5 6 7', '3 4 5 6', '4 5 6', '3 4 5'],
              correctAnswer: 1,
            },
          ],
        },
      },
    ],
  },
};

const hackathons = [
  {
    title: 'Python Hackathon 2024',
    imageUrl: 'https://dummyimage.com/600x400/ccc/000.jpg&text=Python+Hackathon',
  },
  {
    title: 'AI & ML Hackfest',
    imageUrl: 'https://example.com/ai-ml-hackfest.jpg',
  },
  {
    title: 'Web Dev Challenge',
    imageUrl: 'https://example.com/web-dev-challenge.jpg',
  },
];

const placements = [
 
  {
    title: 'Microsoft Graduate Program',
    imageUrl: 'https://example.com/microsoft-graduate.jpg',
  },
  {
    title: 'Amazon SDE Role',
    imageUrl: 'https://example.com/amazon-sde.jpg',
  },
];



// ... (categories, hackathons, and placements objects remain unchanged)

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const [quizResponses, setQuizResponses] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [quizSearchTerm, setQuizSearchTerm] = useState('');
  const [showAnswers, setShowAnswers] = useState({});

  useEffect(() => {
    const filtered = Object.keys(categories).reduce((acc, category) => {
      const matchingSubcategories = categories[category].subcategories.filter(
        subcat => subcat.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchingSubcategories.length > 0) {
        acc[category] = { ...categories[category], subcategories: matchingSubcategories };
      }
      return acc;
    }, {});
    setFilteredCategories(filtered);
  }, [searchTerm]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedSubSubCategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedSubSubCategory(null);
    setQuizResponses({});
    setQuizSearchTerm('');
    setShowAnswers({});
  };

  const handleSubSubCategoryClick = (subSubCategory) => {
    setSelectedSubSubCategory(subSubCategory);
  };

  const handleQuizResponse = (questionIndex, optionIndex) => {
    setQuizResponses(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const toggleShowAnswer = (index) => {
    setShowAnswers(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const renderContent = () => {
    if (!selectedSubcategory) return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-600 text-center text-xl mt-10"
      >
        Please select a subcategory to start learning.
      </motion.p>
    );

    const { type, content } = selectedSubcategory;

    if (type === 'Notes') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-indigo-600">{selectedSubcategory.title}</h3>
          {!selectedSubSubCategory ? (
            <>
              <p className="text-gray-700 text-lg leading-relaxed">{content.description}</p>
              {content.image && (
                <img src={content.image} alt={selectedSubcategory.title} className="rounded-lg shadow-lg w-full object-cover h-64" />
              )}
              {content.video && (
                <div className="relative pt-56.25%">
                  <video 
                    controls 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    poster={content.image}
                  >
                    <source src={content.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {content.code && (
                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                  <h4 className="text-xl font-semibold mb-4 text-indigo-600">Code Example:</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    <code>{content.code}</code>
                  </pre>
                </div>
              )}
              {content.subSubCategories && content.subSubCategories.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-indigo-600">Sub-topics</h4>
                  {content.subSubCategories.map((subSubCat, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSubSubCategoryClick(subSubCat)}
                      className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h5 className="text-xl font-semibold text-indigo-600 flex items-center">
                        {subSubCat.title}
                        <FaChevronRight className="ml-2" />
                      </h5>
                    </motion.button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-2xl font-semibold text-indigo-600 mb-4">{selectedSubSubCategory.title}</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{selectedSubSubCategory.content}</p>
              <button
                onClick={() => setSelectedSubSubCategory(null)}
                className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Back to Main Content
              </button>
            </motion.div>
          )}
        </motion.div>
      );
    } else if (type === 'Quiz') {
      const filteredQuestions = content.questions.filter(q => 
        q.question.toLowerCase().includes(quizSearchTerm.toLowerCase())
      );

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-indigo-600 mb-6">{selectedSubcategory.title}</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search questions..."
              value={quizSearchTerm}
              onChange={(e) => setQuizSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {filteredQuestions.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="font-semibold text-xl mb-4">Q{index + 1}: {q.question}</p>
              <ul className="list-none space-y-2 mb-4">
                {q.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <button
                      onClick={() => handleQuizResponse(index, optionIndex)}
                      className={`w-full text-left p-3 rounded-lg transition duration-300 ${
                        quizResponses[index] === optionIndex
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="w-6 h-6 inline-block rounded-full bg-indigo-100 text-indigo-600 text-center mr-3">
                        {String.fromCharCode(97 + optionIndex)}
                      </span>
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleShowAnswer(index)}
                className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {showAnswers[index] ? 'Hide Answer' : 'Show Answer'}
              </button>
              <AnimatePresence>
                {(quizResponses[index] !== undefined || showAnswers[index]) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-4 rounded-lg ${
                      quizResponses[index] === q.correctAnswer
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    <p className="font-semibold">
                      {quizResponses[index] === q.correctAnswer ? 'Correct!' : 'Incorrect.'}
                    </p>
                    <p className="mt-2">Correct answer: {q.options[q.correctAnswer]}</p>
                    {q.explanation && <p className="mt-2">{q.explanation}</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      );
    }

    return <p className="text-gray-600">No content available.</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <aside className="w-full h-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg lg:h-[calc(100vh-10rem)] flex flex-col">
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <h2 className="font-bold text-2xl mb-4 text-indigo-600">Categories</h2>
          <div className="overflow-y-auto flex-grow">
            <ul className="space-y-2">
              {Object.keys(filteredCategories).map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left p-3 rounded-lg transition duration-300 ${
                      selectedCategory === category ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                  {selectedCategory === category && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {filteredCategories[category].subcategories.map((subcat, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleSubcategoryClick(subcat)}
                            className={`w-full text-left p-2 rounded-md text-sm transition duration-300 ${
                              selectedSubcategory === subcat ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
                            }`}
                          >
                            {subcat.type === 'Notes' && <FaBook className="inline mr-2" />}
                            {subcat.type === 'Quiz' && <FaQuestionCircle className="inline mr-2" />}
                            {subcat.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <section className="flex-1 bg-white p-8 rounded-lg shadow-lg overflow-y-auto lg:h-[calc(100vh-10rem)]">
          {renderContent()}
        </section>
        <aside className="w-full lg:w-1/4 space-y-6 lg:h-[calc(100vh-10rem)] flex flex-col">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
            <h2 className="font-bold text-2xl mb-4 text-indigo-600">Hackathons</h2>
            {hackathons.length > 0 ? (
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                className="rounded-lg overflow-hidden"
              >
                {hackathons.map((item, index) => (
                  <div key={index} className="relative h-64">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg"
              >
                <FaExclamationTriangle className="text-5xl text-yellow-500 mb-4" />
                <p className="text-gray-600 text-center">No hackathons available at the moment.</p>
              </motion.div>
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-bold text-2xl mb-4 text-indigo-600">Placements</h2>
            {placements.length > 0 ? (
              <ul className="space-y-2">
                {placements.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <img src={item.companyLogo} alt={item.company} className="w-8 h-8 rounded-full" />
                    <span className="text-sm">{item.company} - {item.role}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-32 bg-gray-100 rounded-lg"
              >
                <FaExclamationTriangle className="text-3xl text-yellow-500 mb-2" />
                <p className="text-gray-600 text-center">No placement data available.</p>
              </motion.div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Content;