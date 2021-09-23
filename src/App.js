import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
// import Experience from './components/Experience';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Robby',
    email: 'robby7630@gmail.com',
    phoneNumber: '513-314-1687',
    address: '6928 N Greenwich Ave',
    school: '',
    city: '',
    degree: '',
    study: '',
    from: '',
    to: '',
  });

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newSchool, setNewSchool] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newDegree, setNewDegree] = useState('');
  const [newStudy, setNewStudy] = useState('');
  const [newFrom, setNewFrom] = useState('');
  const [newTo, setNewTo] = useState('');

  const addPersonalInfo = (event) => {
    event.preventDefault();
    const newPersonalInfo = {
      fullName: newName,
      email: newEmail,
      phoneNumber: newNumber,
      address: newAddress,
      school: newSchool,
      city: newCity,
      degree: newDegree,
      study: newStudy,
      from: newFrom,
      to: newTo,
    };
    setPersonalInfo(newPersonalInfo);
    setNewName('');
    setNewEmail('');
    setNewNumber('');
    setNewAddress('');
    setNewSchool('');
    setNewCity('');
    setNewDegree('');
    setNewStudy('');
    setNewFrom('');
    setNewTo('');
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

  const handleSchool = (event) => {
    setNewSchool(event.target.value);
  };

  const handleCity = (event) => {
    setNewCity(event.target.value);
  };
  const handleDegree = (event) => {
    setNewDegree(event.target.value);
  };

  const handleStudy = (event) => {
    setNewStudy(event.target.value);
  };

  const handleFrom = (event) => {
    setNewFrom(event.target.value);
  };
  const handleTo = (event) => {
    setNewTo(event.target.value);
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
        <Education
          schoolValue={newSchool}
          cityValue={newCity}
          degreeValue={newDegree}
          studyValue={newStudy}
          fromValue={newFrom}
          toValue={newTo}
          onSubmit={addPersonalInfo}
          onChangeSchool={handleSchool}
          onChangeCity={handleCity}
          onChangeDegree={handleDegree}
          onChangeStudy={handleStudy}
          onChangeFrom={handleFrom}
          onChangeTo={handleTo}
        />
        {/* <Experience /> */}
        <button form="submit-form" type="submit">
          Submit
        </button>
      </div>
    </main>
  );
};

export default App;
