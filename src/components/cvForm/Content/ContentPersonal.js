const ContentPersonal = ({ personal, education }) => {
  return (
    <>
      <h2>
        {personal.firstName} {personal.lastName}
      </h2>
      <div id="details">
        <h3>{personal.title}</h3>
        <p>{personal.description}</p>
      </div>
      <div id="contact">
        <h4>Contact</h4>
        <p>{personal.phoneNumber}</p>
        <p>{personal.email}</p>
        <p>{personal.address}</p>
      </div>
    </>
  );
};

export default ContentPersonal;
