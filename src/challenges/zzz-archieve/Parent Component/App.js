import "./styles.css";

//   Tüm Child  bileşen içeriğini Parent bileşen içinde gösterin.
//   Yalnızca aşağıdaki Parent  Bileşene kod ekleyin

function Child() {
  return <div>children content</div>;
}

// Kodu sadece buraya ekleyin

function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

export default App;
