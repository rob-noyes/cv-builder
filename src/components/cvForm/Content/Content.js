import ContentEducation from './ContentEducation';
import ContentPersonal from './ContentPersonal';
import ContentExperience from './ContentExperience';

const Content = ({ cv }) => {
  const educationInfo = cv.education.map((educationItem) => (
    <ContentEducation key={educationItem.id} educationItem={educationItem} />
  ));

  const experienceInfo = cv.experience.map((experienceItem) => (
    <ContentExperience key={experienceItem.id} experience={experienceItem} />
  ));

  return (
    <section id="resume">
      <section id="sidebar">
        <ContentPersonal personal={cv.personalInfo} education={cv.education} />
        {educationInfo}
      </section>
      <section id="mainbar">
        <div id="experienceList">{experienceInfo}</div>
      </section>
    </section>
  );
};

export default Content;
