const ContentPersonal = ({ cv }) => {
  return (
    <section className="sideBar">
      <h2>
        {cv.firstName} {cv.lastName}
      </h2>
      <div>
        <h3>{cv.title}</h3>
        <p>{cv.description}</p>
      </div>
      <div id="contact">
        <h4>Contact</h4>
        <p>{cv.phoneNumber}</p>
        <p>{cv.email}</p>
        <p>{cv.address}</p>
      </div>
    </section>
  );
};

export default ContentPersonal;
