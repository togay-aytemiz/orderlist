import { useState, useEffect } from 'react'
import './styles.css'
export default function GitHubUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data) // set users  state
      })
  }, []) // boş dizi çünkü yalnızca bir kez çalıştırıyoruz

  return (
    <div className='section'>
      {users.map((user) => (
        <div key={user.id} className='card'>
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  )
}
