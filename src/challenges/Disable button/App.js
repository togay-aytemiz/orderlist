import './styles.css'

/**
 Giriş alanında karakter olmadığında Submit butonunu devre dışı bırakın.
  En az bir karakter olduğunda Submit butonunu etkinleştirin 
  (butonun devre dışı bırakılmasını kaldırın).
  
**/

export default function App() {
  const [] = useState('')

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type='text' />
      <button>Submit</button>
    </>
  )
}
