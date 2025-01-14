"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';

const Faq = () => {
  const [message, setMessage] = useState(''); // State for the popup message
  const [isQAModalOpen, setQAModalOpen] = useState(false); // State for Q&A modal
  const [question, setQuestion] = useState(''); // State for user question
  const [answer, setAnswer] = useState(''); // State for user-provided answer
  const [questions, setQuestions] = useState([ // Dummy list of questions and answers
    { id: 1, question: "Where are the bathrooms?", answer: "The bathrooms are located on each of the floors by the elevators." },
  ]);
  const [openQuestionId, setOpenQuestionId] = useState(null); // Track which question is open

  // Function to show save message
  const handleSaveChanges = () => {
    setMessage('Changes have been saved!');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  // Function to handle Q&A popup
  const handleOpenQAModal = () => {
    setQAModalOpen(true);
  };

  const handleCloseQAModal = () => {
    setQAModalOpen(false);
  };

  // Function to add a new question to the list
  const handleSubmitQuestion = () => {
    // Only check if `question` is filled; `answer` is optional
    if (question.trim()) {
      const newQuestion = {
        id: questions.length + 1, // Assign an id based on length
        question: question,
        answer: answer || '', // Set `answer` to an empty string if it's not provided
      };

      setQuestions([...questions, newQuestion]); // Update state with new question
      setQuestion(''); // Clear the question input field
      setAnswer(''); // Clear the answer input field
      setQAModalOpen(false); // Close the modal
    } else {
      alert('Please enter a question.'); // Alert if question is empty
    }
  };

  // Function to toggle dropdown for a specific question
  const toggleQuestion = (id) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="container mx-auto px-0 py-6">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
        />
      </div>

      <div className="px-10 pt-5">
  {/* Event Header */}
  <div className="grid grid-cols-[3fr,1fr] p-2 border-b border-gray-300">
    <div className="ml-10">Question</div>
    <div className="text-right mr-20">Manage</div>
  </div>
</div>

{/* List of Questions */}
<div className="px-10">
  {questions.map((item, index) => (
    <div
      key={item.id}
      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-300`}
    >
      <div className="grid grid-cols-[3fr,1fr] items-center p-4">
        {/* Question Header with Dropdown Button */}
        <div className="flex items-center space-x-4">
          <button onClick={() => toggleQuestion(item.id)}>
            {openQuestionId === item.id ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <span className="text-lg">{item.question}</span>
        </div>

        {/* Manage Column: Icon Buttons for each question */}
        <div className="flex justify-end space-x-4 pr-3">
          <button><Image src="/images/note-pencil.png" alt="Edit" width={30} height={30} /></button>
          <button><Image src="/images/trash.png" alt="Delete" width={30} height={30} /></button>
          <button><Image src="/images/list.png" alt="Details" width={30} height={30} /></button>
        </div>
      </div>

      {/* Dropdown for Answer with Padding */}
      {openQuestionId === item.id && (
        <div className="px-10 pt-2 pb-4">
          <p className="text-gray-700">{item.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

      {/* Sticky Bottom container for buttons */}
      <div className="fixed bottom-0 left-[300px] w-[calc(100%-300px)] p-4 flex justify-between items-center bg-white shadow-lg border-t border-gray-300">
        {/* Ask a Question Button */}
        <button
          onClick={handleOpenQAModal}
          className="cursor-pointer flex items-center text-green-700 rounded-lg">
          <span className="text-2xl font-bold mr-2">+</span>
          <span className="font-medium">Add a Question</span>
        </button>

        {/* Save Changes Button */}
        <button
          onClick={handleSaveChanges}
          className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-750">
          Save Changes
        </button>
      </div>

      {/* Popup Message */}
      {message && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg text-center">
          {message}
        </div>
      )}

      {/* Q&A Modal */}
      {isQAModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-xl font-bold mb-4">Ask a Question</h2>

            {/* Question Input */}
            <h3>Question:</h3>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 h-20"
            />

            {/* Optional Answer Input */}
            <h3>Answer: (Optional)</h3>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here (Optional)..."
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 h-60"
            />

            {/* Modal Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseQAModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitQuestion}
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;