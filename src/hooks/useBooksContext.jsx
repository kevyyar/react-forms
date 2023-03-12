import { useContext } from "react";
import BooksContext from "../context/Books.context";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
