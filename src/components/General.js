const General = ({
  nameValue,
  emailValue,
  numberValue,
  addressValue,
  onSubmit,
  onChangeName,
  onChangeEmail,
  onChangeNumber,
  onChangeAddress,
}) => {
  return (
    <section className="general">
      <h2>General Info</h2>
      <form id="submit-form" onSubmit={onSubmit}>
        <input
          value={nameValue}
          onChange={onChangeName}
          placeholder="Full Name"
        />
        <input
          value={emailValue}
          onChange={onChangeEmail}
          placeholder="Email"
          type="email"
        />
        <input
          value={numberValue}
          onChange={onChangeNumber}
          placeholder="Phone Number"
          type="tel"
        />
        <input
          value={addressValue}
          onChange={onChangeAddress}
          placeholder="Address"
        />
      </form>
    </section>
  );
};

export default General;
