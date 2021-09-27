const EducationItem = ({ id, education, onChange, onDelete }) => {
  return (
    <section title="Education" className="education">
      <input
        onChange={(e) => onChange(e, id)}
        type="text"
        title="University"
        placeholder="University"
        value={education.university}
      />
      <button text="Delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </section>
  );
};

export default EducationItem;
