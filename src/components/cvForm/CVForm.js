import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Button from './Button';

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onExampleCV,
  onResetCV,
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
      <Button onExample={onExampleCV} onReset={onResetCV} />
    </div>
  );
};

export default CVForm;
