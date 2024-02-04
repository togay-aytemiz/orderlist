import './styles.css'

/**
'Arttır' butonuna tıklamak, sayaç sayısını bir artırmalıdır. `Azalt` bir azaltmalıdır.
**/

const App = () => {
  const [] = useState(0)

  return (
    <div>
      <h2>Counter: 0</h2>
      <button>Arttır</button>
      <button>Azalt</button>
    </div>
  )
}

export default App
