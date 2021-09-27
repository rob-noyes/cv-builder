import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Personal from './components/cvForm/Personal';
import Education from './components/cvForm/Education';
import Experience from './components/cvForm/Experience';
import Resume from './components/Resume';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

// const App = () => {
//   const [personalInfo, setPersonalInfo] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     address: '',
//     school: '',
//     city: '',
//     degree: '',
//     study: '',
//     from: '',
//     to: '',
//     position: '',
//     company: '',
//     companyCity: '',
//     companyFrom: '',
//     companyTo: '',
//   });

//   const [newName, setNewName] = useState('');
//   const [newEmail, setNewEmail] = useState('');
//   const [newNumber, setNewNumber] = useState('');
//   const [newAddress, setNewAddress] = useState('');
//   const [newSchool, setNewSchool] = useState('');
//   const [newCity, setNewCity] = useState('');
//   const [newDegree, setNewDegree] = useState('');
//   const [newStudy, setNewStudy] = useState('');
//   const [newFrom, setNewFrom] = useState('');
//   const [newTo, setNewTo] = useState('');
//   const [newPosition, setNewPosition] = useState('');
//   const [newCompany, setNewCompany] = useState('');
//   const [newCompanyCity, setNewCompanyCity] = useState('');
//   const [newCompanyFrom, setNewCompanyFrom] = useState('');
//   const [newCompanyTo, setNewCompanyTo] = useState('');

//   const addPersonalInfo = (event) => {
//     event.preventDefault();
//     const newPersonalInfo = {
//       fullName: newName,
//       email: newEmail,
//       phoneNumber: newNumber,
//       address: newAddress,
//       school: newSchool,
//       city: newCity,
//       degree: newDegree,
//       study: newStudy,
//       from: newFrom,
//       to: newTo,
//       position: newPosition,
//       company: newCompany,
//       companyCity: newCompanyCity,
//       companyFrom: newCompanyFrom,
//       companyTo: newCompanyTo,
//     };
//     setPersonalInfo(newPersonalInfo);
//     setNewName('');
//     setNewEmail('');
//     setNewNumber('');
//     setNewAddress('');
//     setNewSchool('');
//     setNewCity('');
//     setNewDegree('');
//     setNewStudy('');
//     setNewFrom('');
//     setNewTo('');
//     setNewPosition('');
//     setNewCompany('');
//     setNewCompanyCity('');
//     setNewCompanyFrom('');
//     setNewCompanyTo('');
//   };

//   const handleName = (event) => {
//     setNewName(event.target.value);
//   };

//   const handleEmail = (event) => {
//     setNewEmail(event.target.value);
//   };

//   const handleNumber = (event) => {
//     setNewNumber(event.target.value);
//   };
//   const handleAddress = (event) => {
//     setNewAddress(event.target.value);
//   };

//   const handleSchool = (event) => {
//     setNewSchool(event.target.value);
//   };

//   const handleCity = (event) => {
//     setNewCity(event.target.value);
//   };
//   const handleDegree = (event) => {
//     setNewDegree(event.target.value);
//   };

//   const handleStudy = (event) => {
//     setNewStudy(event.target.value);
//   };

//   const handleFrom = (event) => {
//     setNewFrom(event.target.value);
//   };
//   const handleTo = (event) => {
//     setNewTo(event.target.value);
//   };

//   const handleCompany = (event) => {
//     setNewCompany(event.target.value);
//   };

//   const handlePosition = (event) => {
//     setNewPosition(event.target.value);
//   };

//   const handleCompanyCity = (event) => {
//     setNewCompanyCity(event.target.value);
//   };

//   const handleCompanyFrom = (event) => {
//     setNewCompanyFrom(event.target.value);
//   };
//   const handleCompanyTo = (event) => {
//     setNewCompanyTo(event.target.value);
//   };

//   return (
//     <main>
//       <Header />
//       <div className="contentContainer">
//         <General
//           nameValue={newName}
//           emailValue={newEmail}
//           numberValue={newNumber}
//           addressValue={newAddress}
//           onSubmit={addPersonalInfo}
//           onChangeName={handleName}
//           onChangeEmail={handleEmail}
//           onChangeNumber={handleNumber}
//           onChangeAddress={handleAddress}
//         />
//         <Education
//           schoolValue={newSchool}
//           cityValue={newCity}
//           degreeValue={newDegree}
//           studyValue={newStudy}
//           fromValue={newFrom}
//           toValue={newTo}
//           onSubmit={addPersonalInfo}
//           onChangeSchool={handleSchool}
//           onChangeCity={handleCity}
//           onChangeDegree={handleDegree}
//           onChangeStudy={handleStudy}
//           onChangeFrom={handleFrom}
//           onChangeTo={handleTo}
//         />
//         <Experience
//           positionValue={newPosition}
//           companyValue={newCompany}
//           cityValue={newCompanyCity}
//           fromValue={newCompanyFrom}
//           toValue={newCompanyTo}
//           onSubmit={addPersonalInfo}
//           onChangePosition={handlePosition}
//           onChangeCompany={handleCompany}
//           onChangeCity={handleCompanyCity}
//           onChangeFrom={handleCompanyFrom}
//           onChangeTo={handleCompanyTo}
//         />
//         <button id="submit-info" form="submit-form" type="submit">
//           Submit
//         </button>
//       </div>
//       <Resume details={personalInfo} />
//     </main>
//   );
// };

export default App;
