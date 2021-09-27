const ExperienceItem = ({ id, experience, onChange, onDelete }) => {
  return (
    <section className="experience">
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
        name="company"
        placeholder="Company"
        value={experience.company}
      />
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={experience.city}
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
    </section>
  );
};

export default ExperienceItem;
