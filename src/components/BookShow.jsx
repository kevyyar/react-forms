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

  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} onEditBook={onEditBook} />
  }


  return (
    <div className="book-show">
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
