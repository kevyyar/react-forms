import { useState } from 'react';
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = id => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...books, title: newTitle }
      }

      return book;
    })

    setBooks(updatedBooks)
  }

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: crypto.randomUUID(), title }
    ]

    setBooks(updatedBooks)
  };


  return (
    <div className='app'>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEditBook={editBookById} onDeleteBook={deleteBookById} />
    </div>
  );
}

export default App;
