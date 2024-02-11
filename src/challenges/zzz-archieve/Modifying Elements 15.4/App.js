import { useState } from "react";
import { Input } from "./Input";
import { EditForm } from "./EditForm";
import "./styles.css";
function App() {
  const [books, setBooks] = useState([
    { id: 10, title: "Harry Potter" }, // Değiştirmeyin
    { id: 17, title: "Açlık Oyunları" },
    { id: 54, title: "Game of Thrones" },
  ]);

  const updateBookById = (id, title) => {
    // YAPILACAKLAR: 'books' array'inde verilen id'ye sahip bir kitap bulun
    // Kitabın 'title' özelliğini güncelleyin
    // 'setBooks'u çağırarak 'books' state güncellemeyi unutmayın
    const newArr = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(newArr);
  };

  const addBook = (title) => {
    const book = { title: title, id: ~~(Math.random() * 1000) };
    setBooks([...books, book]);
  };

  const renderedBooks = books.map((book, i) => {
    return (
      <li key={book.id}>
        Başlık: {book.title}, Id: {book.id}
      </li>
    );
  });

  return (
    <div>
      <Input onSubmit={addBook} />
      <ol>{renderedBooks}</ol>
      <hr />
      <EditForm books={books} onSubmit={updateBookById} />
    </div>
  );
}

export default App;
