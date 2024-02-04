import './styles.css'

/**
Aşağıdaki Child butonuna tıklandığında Parent metni (Child'dan bilgi almam gerekiyor) güncellenmelidir. Parent'ın mevcut dizesini güncellemek için herhangi bir dize kullanabilirsiniz.
**/

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Parent Değeri Değiştir</button>
    </>
  )
}

export default function Parent() {
  const [value, setValue] = useState("Child'dan bilgi almam gerekiyor")

  return (
    <>
      <h3>Parent State Güncelleme (Callback)</h3>
      <div className='wrapper'>
        <div>Parent</div>
        <div className='box-wrapper'>{value}</div>
      </div>

      <div className='wrapper'>
        <Child />
      </div>
    </>
  )
}
