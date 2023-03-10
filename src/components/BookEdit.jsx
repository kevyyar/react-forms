import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, handleEditSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleEditSubmit();
    editBookById(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={handleChange}
        type="text"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
