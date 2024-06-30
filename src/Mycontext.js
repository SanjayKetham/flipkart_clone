import React, { createContext, useState } from 'react';


export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Initialize as an empty array

  return (
    <Mycontext.Provider value={{ users, setUsers }}>
      {children}
    </Mycontext.Provider>
  );
};





