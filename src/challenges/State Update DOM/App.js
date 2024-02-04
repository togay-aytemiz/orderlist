import './styles.css'

function App() {
  // KODUNUZ  BURADA OLACAK

  return (
    <div className='App'>
      <div>
        <h2 className='subtitle is-4'>Inputtan Verileri Güncelleme</h2>
      </div>

      {/* Verileri Göster */}
      <div className='input-display'>
        <p>İsmi Göster: </p>
        <p>Yaşı Göster: </p>
      </div>

      {/* Kullanıcı Girdilerini Toplayın */}
      <div className='inputs'>
        {/* isim input */}
        <div className='field'>
          <label className='label'>İsmi: </label>
          <input className='input' type='text' placeholder='Namık' />
        </div>

        {/* yaş input */}
        <div className='field'>
          <label className='label'>Yaşı: </label>
          <input className='input' type='number' placeholder='28' />
        </div>
      </div>
    </div>
  )
}

export default App
