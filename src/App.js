import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import General from './components/General';
// import Education from './components/Education';
// import Experience from './components/Experience';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Robby',
    email: 'robby7630@gmail.com',
    phoneNumber: '513-314-1687',
    address: '6928 N Greenwich Ave',
  });
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newAddress, setNewAddress] = useState('');

  const addPersonalInfo = (event) => {
    event.preventDefault();
    const newPersonalInfo = {
      fullName: newName,
      email: newEmail,
      phoneNumber: newNumber,
      address: newAddress,
    };
    setPersonalInfo(newPersonalInfo);
    setNewName('');
    setNewEmail('');
    setNewNumber('');
    setNewAddress('');
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleEmail = (event) => {
    setNewEmail(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleAddress = (event) => {
    setNewAddress(event.target.value);
  };

  return (
    <main>
      <Header />
      <div className="contentContainer">
        <General
          nameValue={newName}
          emailValue={newEmail}
          numberValue={newNumber}
          addressValue={newAddress}
          onSubmit={addPersonalInfo}
          onChangeName={handleName}
          onChangeEmail={handleEmail}
          onChangeNumber={handleNumber}
          onChangeAddress={handleAddress}
        />
        {/* <Education />
        <Experience /> */}
        <button form="submit-form" type="submit">
          Submit
        </button>
        {personalInfo.fullName}
        {personalInfo.email}
        {personalInfo.phoneNumber}
        {personalInfo.address}
      </div>
    </main>
  );
};

export default App;
