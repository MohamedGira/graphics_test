function SelectComponent({ label, name, children, value, handleChange }) {
  return (
    <div>
      <label forHtml={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
}

export default SelectComponent;
