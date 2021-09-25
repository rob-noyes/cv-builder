import Personal from './Personal';

const CVForm = ({ cv, onChangePersonal }) => {
  return (
    <div>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
    </div>
  );
};

export default CVForm;
