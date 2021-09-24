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
        <p>City: {details.city}</p>
        <p>Degree: {details.degree}</p>
        <p>Field Of Study: {details.study}</p>
        <p>From: {details.from}</p>
        <p>To: {details.to}</p>
      </div>
      <div className="experienceContainer">
        <h3>{details.position}</h3>
        <p>{details.company}</p>
        <p>City: {details.companyCity}</p>
        <p>From: {details.companyFrom}</p>
        <p>To: {details.companyTo}</p>
      </div>
    </div>
  );
};

export default Resume;
