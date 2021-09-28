const ContentEducation = ({ educationItem }) => {
  return (
    <div className="educationContainer">
      <h3>{educationItem.university}</h3>
      <p>{educationItem.city}</p>
      <p>{educationItem.degree}</p>
      <p>{educationItem.study}</p>
      <span>
        {educationItem.from} - {educationItem.to}
      </span>
    </div>
  );
};

export default ContentEducation;
