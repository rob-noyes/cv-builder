import uuid from 'react-uuid';

const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Web Developer',
    email: 'hello@email.com',
    phoneNumber: '555-503-2013',
    address: '123 Park Way, Cupertino, CA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, ex id venenatis lobortis, tellus velit rutrum sem, iaculis dignissim neque est eget nibh. Sed id turpis nibh. Aenean a auctor sem. Vivamus at eros quis eros finibus porttitor. ',
  },
  experience: [
    {
      id: uuid(),
      position: 'Web Developer',
      company: 'Apple',
      city: 'Cupertino, CA',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo consequat, sagittis tortor nec, rutrum purus. Phasellus maximus dolor sit amet tincidunt suscipit. Cras ut lacus vel odio faucibus posuere. Praesent ligula mi, tincidunt a faucibus vel, porta sit amet leo.',
      from: 'May 2017',
      to: 'Present',
    },
    {
      id: uuid(),
      position: 'Web Developer',
      company: 'Microsoft',
      city: 'Seattle, WA',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo consequat, sagittis tortor nec, rutrum purus. Phasellus maximus dolor sit amet tincidunt suscipit. Cras ut lacus vel odio faucibus posuere. Praesent ligula mi, tincidunt a faucibus vel, porta sit amet leo.',
      from: 'July 2015',
      to: 'May 2017',
    },
    {
      id: uuid(),
      position: 'Web Developer',
      company: 'Google',
      city: 'Boston, MA',
      details:
        'Vestibulum ac mattis ex, vitae finibus ipsum. Phasellus facilisis risus arcu, eget lacinia metus ultrices quis. Morbi consequat lobortis justo, eget tincidunt augue mollis a. Donec efficitur varius facilisis. Morbi sodales, neque vel congue pellentesque, nisl orci pulvinar augue, vel',
      from: 'January 2012',
      to: 'July 2015',
    },
  ],
  education: [
    {
      id: uuid(),
      university: 'University of Portland',
      city: 'Portland, OR',
      degree: 'Bachelor of Science in Communications',
      study: 'Web Development',
      from: '2008',
      to: '2012',
    },
  ],
};

export default exampleCV;
