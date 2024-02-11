import './styles.css'

function App() {
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30'

  return (
    <div className='App'>
      <h1>Game of Thrones Kitapları</h1>
      <h2>API&apos;den liste alın ve görüntüleyin</h2>

      {/* Fetch data  API */}
      <div>
        <button className='fetch-button'>Fetch Data</button>
        <br />
      </div>

      {/* API'den gelen veriyi gösterin */}

      {/* Her kitap için aşağıdaki JSX'i kullanın*/}
      <div className='books'>
        <div className='book'>
          <h3>Book Number</h3>
          <h2>Book Name</h2>

          <div className='details'>
            <p>👨: Author/Authors</p>
            <p>📖: Number of pages</p>
            <p>🏘️: Book Country</p>
            <p>⏰: Release date</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
