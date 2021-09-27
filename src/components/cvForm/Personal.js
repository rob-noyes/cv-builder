const Personal = ({ personalInfo, onChange }) => {
  return (
    <section title="Personal Info" className="personalInfo">
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First Name"
        value={personalInfo.firstName}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={personalInfo.lastName}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={personalInfo.phoneNumber}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
      />
      <textarea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
        value={personalInfo.description}
      />
    </section>
  );
};

export default Personal;
