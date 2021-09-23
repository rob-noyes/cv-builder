const Resume = ({ details }) => {
  console.log(details);
  return (
    <div id="resumeBuild">
      <div className="basic-info">
        <h3>{details.fullName}</h3>
        <p>{details.email}</p>
        <p>{details.phoneNumber}</p>
        <p>{details.address}</p>
      </div>
      <div className="educationContainer">
        <h3>{details.school}</h3>
        <p>{details.city}</p>
        <p>{details.degree}</p>
        <p>{details.study}</p>
        <p>{details.from}</p>
        <p>{details.to}</p>
      </div>
      <div className="experienceContainer">
        <h3>{details.position}</h3>
        <p>{details.company}</p>
        <p>{details.companyCity}</p>
        <p>{details.companyFrom}</p>
        <p>{details.companyTo}</p>
      </div>
    </div>
  );
};

export default Resume;
