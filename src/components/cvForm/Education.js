import EducationItem from './EducationItem';

const Education = ({ educationInfo, onChange, onAdd, onDelete }) => {
  const educationItem = educationInfo.map((education) => {
    return (
      <EducationItem
        key={education.id}
        id={education.id}
        education={education}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  });
  return (
    <div>
      {educationItem}
      <button text="Add" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default Education;
