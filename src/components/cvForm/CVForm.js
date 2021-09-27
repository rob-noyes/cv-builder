import Personal from './Personal';
import Education from './Education';

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => {
  return (
    <div className="cvForm">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Education
        educationInfo={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
    </div>
  );
};

export default CVForm;
