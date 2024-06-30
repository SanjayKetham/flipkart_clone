import React, { useState } from 'react';
import { Mycontext } from '../Mycontext';

const TodoList = () => {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  
  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setList([...list, data]);
    setData({});
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1>Todo App</h1>
        <div className="flex flex-col gap-2">
          <span>
            <input
            value={data.time}
              name="time"
              onChange={handleChange}
              placeholder="Time"
              type="time"
              className="p-2 border border-gray-300 rounded"
            />
          </span>
          <span>
            <input
            value={data.note}
              name="note"
              onChange={handleChange}
              placeholder="Enter your task here"
              className="p-2 border border-gray-300 rounded"
            />
          </span>
          <button
            onClick={handleSubmit}
            className="bg-orange-600 text-white py-2 px-4 rounded w-[200px] hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2>Todo List:</h2>
        <table className="border-4 border-black w-full">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Note</th>
                </tr>
            </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index} className="border-4 border-black">
                <td className="border-4 border-black">{item.time}</td>
                <td className="border-4 border-black">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;