import EducationItem from './EducationItem';

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      education={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));
  return (
    <div className="education">
      {educationItems}
      <button text="Add" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default Education;
