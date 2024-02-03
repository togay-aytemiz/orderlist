function Slider({ value, onChange }) {
  return (
    <div>
      <h1>Yaşımız:</h1>
      <input
        type="range"
        min={10}
        max={90}
        step={5}
        value={value || 50}
        onChange={(e) => onChange(e.target.value)}
      />
      <h1>{value}</h1>
    </div>
  );
}

export { Slider };
