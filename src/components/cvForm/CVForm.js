import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
}) => {
  return (
    <div className="cvForm">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <Experience
        experienceInfo={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
    </div>
  );
};

export default CVForm;
