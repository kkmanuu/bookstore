import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../styles/book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookFromAPI } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book }) => {
  const percentage = Math.floor(Math.random() * 100);
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = book;
  return (
    <div className="eachBookDiv">
      <div className="eachBook">
        <div className="bookDetails">
          <p className="genre">{category}</p>
          <p className="bookTitle">{title}</p>
          <p>{author}</p>
          <div className="commentRemoveEditDiv">
            <p className="commentRemoveEditEffects">Comments</p>
            <button
              type="button"
              className="removeBookButton"
              onClick={() => dispatch(removeBookFromAPI(id))}
            >
              Remove
            </button>
            <p className="commentRemoveEditEffects">Edit</p>
          </div>
        </div>
        <div className="completedRing">
          <div className="ring"><CircularProgressbar value={percentage} /></div>
          <div>
            <h2 className="percent">{`${percentage}%`}</h2>
            <span>Completed</span>
          </div>
        </div>
        <div className="currentChapter">
          <div className="line">.</div>
          <div>
            <p className="chapterDetails">CURRENT CHAPTER</p>
            <p className="chapterNumber">Chapter 17</p>
            <button type="button" className="progressButton">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
