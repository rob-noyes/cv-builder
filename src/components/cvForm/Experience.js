import ExperienceItem from './ExperienceItem';

const Experience = ({ experienceInfo, onChange, onAdd, onDelete }) => {
  const experienceItem = experienceInfo.map((experience) => {
    return (
      <ExperienceItem
        key={experience.id}
        id={experience.id}
        experience={experienceInfo}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  });
  return (
    <div className="experience">
      {experienceItem}
      <button title="Add" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default Experience;
