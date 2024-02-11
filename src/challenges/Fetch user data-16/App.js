import './styles.css'

const url = 'https://jsonplaceholder.typicode.com/users/1'
/** 
  // Örnek Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

/** 
Yukarıdaki url verildiğinde bu uygulamanın verileri getirmesini ve tarayıcıda görüntülemesini sağlayın (Küçük İpucu: `useEffect ve fetch api' kullanın)
**/
export default function App() {
  const [userData, setUserData] = useState({})

  // Aşağıdaki koda dokunmanıza gerek yok
  return (
    <div className='App'>
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{' '}
        {userData.name || '(Burada adı doldurmanız gerekiyor)'}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || '(Burada website doldurmanız gerekiyor)'}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || '(Burada email doldurmanız gerekiyor)'}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || '(Burada telefon doldurmanız gerekiyor)'}
      </p>
    </div>
  )
}
