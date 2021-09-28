const ContentExperience = ({ experience }) => {
  return (
    <div className="workExperience">
      <div className="companyDetails">
        <h3>{experience.company}</h3>
        <p>{experience.position}</p>
      </div>
      <div className="companyTimeline">
        <p>
          {experience.from} - {experience.to} | {experience.city}
        </p>
      </div>
      <p>{experience.details}</p>
    </div>
  );
};

export default ContentExperience;
