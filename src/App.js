import './App.css';
import React, { useState } from 'react';

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
      <div className="header">
        <div>
          <h1>CV Builder</h1>
        </div>
      </div>
      <div className="contentContainer">
        <section className="general">
          <h2>General Info</h2>
          <form>
            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <input placeholder="Phone Number" type="tel" />
            <input placeholder="Address" />
          </form>
        </section>
        <section className="education">
          <h2>Education and Training</h2>
          <form className="educationForm">
            <input placeholder="University Name" />
            <input placeholder="City" />
            <input placeholder="Degree" />
            <input placeholder="Area Of Study" />
            <input placeholder="From" />
            <input placeholder="To" />
          </form>
          <button>Delete</button>
          <button>Add</button>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <form className="experienceForm">
            <input placeholder="Position" />
            <input placeholder="Company" />
            <input placeholder="City" />
            <input placeholder="From" />
            <input placeholder="To" />
          </form>
          <button>Delete</button>
          <button>Add</button>
        </section>
        <button type="submit">Submit</button>
      </div>
    </main>
  );
};

export default App;
