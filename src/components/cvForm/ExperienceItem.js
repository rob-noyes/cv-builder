const ExperienceItem = ({ id, experience, onChange, onDelete }) => {
  return (
    <>
      <h3>Experience</h3>
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Company"
        value={experience.company}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={experience.city}
      />
      <textarea
        onChange={(e) => onChange(e, id)}
        type="text"
        name="details"
        placeholder="Details"
        value={experience.details}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={experience.from}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={experience.to}
      />
      <button text="Delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default ExperienceItem;
