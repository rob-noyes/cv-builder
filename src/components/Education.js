const Education = ({
  schoolValue,
  cityValue,
  degreeValue,
  studyValue,
  fromValue,
  toValue,
  onSubmit,
  onChangeSchool,
  onChangeCity,
  onChangeDegree,
  onChangeStudy,
  onChangeFrom,
  onChangeTo,
}) => {
  return (
    <section className="education">
      <h2>Education and Training</h2>
      <form onSubmit={onSubmit} className="educationForm">
        <input
          value={schoolValue}
          onChange={onChangeSchool}
          placeholder="University Name"
        />
        <input value={cityValue} onChange={onChangeCity} placeholder="City" />
        <input
          value={degreeValue}
          onChange={onChangeDegree}
          placeholder="Degree"
        />
        <input
          value={studyValue}
          onChange={onChangeStudy}
          placeholder="Area Of Study"
        />
        <input value={fromValue} onChange={onChangeFrom} placeholder="From" />
        <input value={toValue} onChange={onChangeTo} placeholder="To" />
      </form>
      <button>Delete</button>
      <button>Add</button>
    </section>
  );
};

export default Education;
