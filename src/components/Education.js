const Education = () => {
  return (
    <section className="education">
      <h2>Education and Training</h2>
      <form className="educationForm">
        <input placeholder="University Name" />
        <input placeholder="City" />
        <input placeholder="Degree" />
        <input placeholder="Area Of Study" />
        <input placeholder="From" />
        <input placeholder="To" />
      </form>
      <button>Delete</button>
      <button>Add</button>
    </section>
  );
};

export default Education;
