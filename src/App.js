import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [newName, setNewName] = useState('');

  const addPersonalInfo = (event) => {
    event.preventDefault();
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <main>
      <Header />
      <div className="contentContainer">
        <General />
        <Education />
        <Experience />
        <button type="submit">Submit</button>
      </div>
    </main>
  );
};

export default App;
