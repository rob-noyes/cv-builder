import uuid from 'react-uuid';

const emptyCV = {
  personalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phoneNumber: '',
    address: '',
    description: '',
  },
  experience: [
    {
      id: uuid(),
      position: '',
      company: '',
      city: '',
      details: '',
      from: '',
      to: '',
    },
  ],
  education: [
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
};

export default emptyCV;
