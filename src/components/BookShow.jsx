import { useState, useContext } from "react";
import BooksContext from "../context/Books.context";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const { deleteBookById } = useContext(BooksContext)

  const [edit, setEdit] = useState(false)

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }
  const handleEditClick = () => {
    setEdit(!edit)
  }

  const handleEditSubmit = () => {
    setEdit(false)
  }

  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} handleEditSubmit={handleEditSubmit} />
  }


  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button onClick={handleDeleteClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
