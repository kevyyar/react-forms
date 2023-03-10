import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook, onEditBook }) {
  const [edit, setEdit] = useState(false)

  const handleDeleteClick = () => {
    onDeleteBook(book.id)
  }
  const handleEditClick = () => {
    setEdit(!edit)
  }

  const handleEditSubmit = (id, newTitle) => {
    onEditBook(id, newTitle)
    setEdit(false)
  }

  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} onEditSubmit={handleEditSubmit} />
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
