const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <form className="experienceForm">
        <input placeholder="Position" />
        <input placeholder="Company" />
        <input placeholder="City" />
        <input placeholder="From" />
        <input placeholder="To" />
      </form>
      <button>Delete</button>
      <button>Add</button>
    </section>
  );
};

export default Experience;
