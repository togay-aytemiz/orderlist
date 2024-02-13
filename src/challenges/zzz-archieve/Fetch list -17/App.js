import moment from "moment";
import { useState } from "react";
import "./styles.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await fetch(apiURL);
    const data = await res.json();
    setBooks(data);
    console.log(books);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Kitapları</h1>
      <h2>API&apos;den liste alın ve görüntüleyin</h2>

      <div>
        <button className="fetch-button" onClick={getBooks}>
          Fetch Data
        </button>
        <br />
      </div>
      <div className="books">
        {books.map((book, index) => {
          let formattedDate = moment(book.released).format("ddd MMM Do YYYY");
          return (
            <div className="book">
              <h3>{`Book ${index + 1}`}</h3>
              <h2>{book.name}</h2>
              <div className="details">
                <p>👨: {book.authors}</p>
                <p>📖: {book.numberOfPages}</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {formattedDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
