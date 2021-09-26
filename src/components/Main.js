//PersonalInfo, Experience, Education sections
// Allow for the ability to generate a CV from forms, allow it to be downloadable

import React, { useState } from 'react';
import emptyCV from './cvForm/emptyCV';
import CVForm from './cvForm/CVForm';

const Main = () => {
  const [cv, setCv] = useState(emptyCV);

  const handleChangePersonal = (event) => {
    const { name, value, type } = event.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };
  return (
    <div className="main">
      <CVForm cv={cv} onChangePersonal={handleChangePersonal} />
    </div>
  );
};

export default Main;
