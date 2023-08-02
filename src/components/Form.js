import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postToAPI, getBooksFromAPI } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, [dispatch]);

  const categories = ['Science Fiction', 'Supernatural', 'Fiction', 'Non-Fiction', 'Romance', 'Fantasy', 'Economics'];
  const randomCategory = Math.floor(Math.random() * categories.length);

  const newBookBeingAdded = {
    item_id: uuidv4(),
    title,
    author,
    category: categories[randomCategory],
  };

  const submitToAPI = () => {
    if (title && author) {
      dispatch(postToAPI(newBookBeingAdded));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form className="addBookDiv">
      <div className="addBook">
        <h3>ADD NEW BOOK</h3>
        <input id="book-title" type="text" placeholder="Add a book" value={title} onChange={(event) => { setTitle(event.target.value); }} />
        <input id="book-author" type="text" placeholder="Add author" value={author} onChange={(event) => { setAuthor(event.target.value); }} />
        <button type="button" className="addBookButton progressButton" onClick={() => submitToAPI()}>ADD BOOK</button>
      </div>
    </form>
  );
};
export default Form;
