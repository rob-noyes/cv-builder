//PersonalInfo, Experience, Education sections
// Allow for the ability to generate a CV from forms, allow it to be downloadable

import React, { useState } from 'react';
import emptyCV from './cvForm/emptyCV';
import CVForm from './cvForm/CVForm';
import Content from './cvForm/Content';
import uuid from 'react-uuid';

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

  const handleChangeEducation = (event, id) => {
    const { name, value } = event.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = (event, id) => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuid(),
          university: '',
          city: '',
          degree: '',
          study: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  return (
    <div className="main">
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <Content cv={cv.personalInfo} />
    </div>
  );
};

export default Main;
