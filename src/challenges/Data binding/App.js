import './styles.css'

/**
   Kullanıcı, girişte herhangi bir karakteri yazabilmeli ve 
   bu karakterler tarayıcıda gösterilmelidir.

**/

export default function App() {
  const [] = useState('')

  return (
    <>
      <input type='text' placeholder='Enter Text' />
      <p></p>
    </>
  )
}
