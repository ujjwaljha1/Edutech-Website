import React, { useState } from 'react';
import axios from 'axios';

const QuizForm = ({ categoryId, subcategoryId, subSubCategoryId }) => {
  const [title, setTitle] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', option1: '', option2: '', option3: '', option4: '', correctAnswer: '' },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/content/add', {
        type: 'quiz',
        categoryId,
        subcategoryId,
        subSubCategoryId,
        title,
        questions
      });
      console.log('Quiz added successfully:', response.data);
      setTitle('');
      setNumQuestions(0);
      setQuestions([]);
    } catch (error) {
      console.error('Error adding quiz:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">Quiz Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <label className="block mb-2">Number of Questions:</label>
      <input
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        className="border p-2 mb-4 w-full"
        onBlur={() => {
          setQuestions(Array.from({ length: numQuestions }, () => ({
            question: '', option1: '', option2: '', option3: '', option4: '', correctAnswer: '',
          })));
        }}
      />
      {questions.map((_, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Question {index + 1}:</label>
          <input
            type="text"
            value={questions[index].question}
            onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          {['option1', 'option2', 'option3', 'option4'].map((option, i) => (
            <div key={i} className="mb-2">
              <label className="block mb-1">{`Option ${i + 1}`}</label>
              <input
                type="text"
                value={questions[index][option]}
                onChange={(e) => handleQuestionChange(index, option, e.target.value)}
                className="border p-2 w-full"
              />
            </div>
          ))}
          <label className="block mb-2">Correct Answer:</label>
          <select
            value={questions[index].correctAnswer}
            onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Select Correct Answer</option>
            {['option1', 'option2', 'option3', 'option4'].map((option, i) => (
              <option key={i} value={option}>
                {questions[index][option]}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button type="button" onClick={addQuestion} className="bg-blue-500 text-white p-2 mb-4">
        Add Question
      </button>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit Quiz
      </button>
    </form>
  );
};

export default QuizForm;