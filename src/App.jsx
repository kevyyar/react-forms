import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBooks();
  }, [])


  const fetchBooks = async () => {
    setLoading(true)
    try {
      const res = await axios.get("http://localhost:3001/books");
      console.log(res.data)
      setBooks(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })
    const { data } = res;
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title
    })
    const { data } = res;

    const updatedBooks = [...books, data];

    setBooks(updatedBooks);
  };

  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList
        books={books}
        onEditBook={editBookById}
        onDeleteBook={deleteBookById}
      />
    </div>
  );
}

export default App;
