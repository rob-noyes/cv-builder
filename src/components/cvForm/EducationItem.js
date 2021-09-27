const EducationItem = ({ id, education, onChange, onDelete }) => {
  return (
    <>
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="university"
        placeholder="University"
        value={education.university}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={education.city}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="study"
        placeholder="Study"
        value={education.study}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={education.from}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="number"
        name="to"
        placeholder="To"
        value={education.to}
      />
      <button text="Delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default EducationItem;
