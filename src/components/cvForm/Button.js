const Button = ({ onExample, onReset }) => {
  return (
    <div className="exampleReset">
      <button id="example" onClick={onExample}>
        Example CV
      </button>
      <button id="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Button;
