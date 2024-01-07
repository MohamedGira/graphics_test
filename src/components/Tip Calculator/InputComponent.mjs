function InputComponent({ label, type, name, value, handleChange }) {
  return (
    <div>
      <label forHtml={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default InputComponent;
