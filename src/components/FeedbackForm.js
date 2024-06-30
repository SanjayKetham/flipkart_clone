import React, { useRef } from 'react';

const FeedbackForm = ({ onClose }) => {
  const rollNoRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const feedbackInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const rollNo = rollNoRef.current.value;
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const feedback = feedbackInputRef.current.value;

    
    if (!rollNo || !name || !age || !feedback) {
      alert('Please fill in all fields.');
      return;
    }

    
    console.log('Feedback submitted:', {//to handle data
      rollNo,
      name,
      age,
      feedback,
    });

    
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
              Roll No:
            </label>
            <input
              ref={rollNoRef}
              type="text"
              id="rollNo"
              className="w-full p-2 border rounded"
              placeholder="Enter your roll number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age:
            </label>
            <input
              ref={ageRef}
              type="number"
              id="age"
              className="w-full p-2 border rounded"
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Feedback:
            </label>
            <textarea
              ref={feedbackInputRef}
              id="feedback"
              className="w-full p-2 border rounded"
              placeholder="Enter your feedback..."
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
