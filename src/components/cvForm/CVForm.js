import Personal from './Personal';

const CVForm = ({ cv, onChangePersonal }) => {
  return (
    <div className="cvForm">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
    </div>
  );
};

export default CVForm;
