// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [isAuth, setMyState] = useState(false);
  const [user, setUser] = useState({email:"",password:""});

  const updateState = (newState) => {
    setMyState(true);
  };
  const AddUser = (newState) => {
    setUser(newState);
  };

  return (
    <MyContext.Provider value={{ isAuth, updateState,user,AddUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
