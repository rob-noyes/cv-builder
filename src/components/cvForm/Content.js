import ContentEducation from './ContentEducation';
import ContentPersonal from './ContentPersonal';

const Content = ({ cv }) => {
  const educationInfo = cv.education.map((educationItem) => (
    <ContentEducation key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <section id="resume">
      <ContentPersonal personal={cv.personalInfo} />
      {educationInfo}
    </section>
  );
};

export default Content;
