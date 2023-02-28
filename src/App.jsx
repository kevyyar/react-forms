import { useState } from 'react';
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: crypto.randomUUID(), title }
    ]

    setBooks(updatedBooks)
  };

  console.log(books)

  return (
    <div className='app'>
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
