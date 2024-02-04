// Burada hiçbir şeyi değiştirmenize gerek yok
import { ImageList } from './ImageList'
import './styles.css'
const images = [
  { id: 'a', name: 'Yaprak', src: 'https://picsum.photos/seed/abd/200/300' },
  { id: 'b', name: 'Ev', src: 'https://picsum.photos/seed/gqk/200/300' },
  { id: 'c', name: 'Ağaç', src: 'https://picsum.photos/seed/ias/200/300' },
]

function App() {
  return <ImageList images={images} />
}

export default App
