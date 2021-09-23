const Experience = ({
  positionValue,
  companyValue,
  cityValue,
  fromValue,
  toValue,
  onSubmit,
  onChangePosition,
  onChangeCompany,
  onChangeCity,
  onChangeFrom,
  onChangeTo,
}) => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <form onSubmit={onSubmit} className="experienceForm">
        <input
          value={positionValue}
          onChange={onChangePosition}
          placeholder="Position"
        />
        <input
          value={companyValue}
          onChange={onChangeCompany}
          placeholder="Company"
        />
        <input value={cityValue} onChange={onChangeCity} placeholder="City" />
        <input value={fromValue} onChange={onChangeFrom} placeholder="From" />
        <input value={toValue} onChange={onChangeTo} placeholder="To" />
      </form>
      <button>Delete</button>
      <button>Add</button>
    </section>
  );
};

export default Experience;
