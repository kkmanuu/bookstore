import '../styles/books.css';
import Form from './Form';

const Books = () => (
  <div className="booksDiv">
    <div className="eachBookDiv">
      <div className="eachBook">
        <div className="bookDetails">
          <p className="genre">Action</p>
          <p className="bookTitle">The Hunger Games</p>
          <p>Susanne Collins</p>
          <div className="commentRemoveEditDiv">
            <p className="commentRemoveEditEffects">Comments</p>
            <p className="commentRemoveEditEffects">Remove</p>
            <p className="commentRemoveEditEffects">Edit</p>
          </div>
        </div>
        <div className="completedRing">
          <div className="ring">.</div>
          <div>
            <h2 className="percent">64%</h2>
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
    <div className="eachBookDiv">
      <div className="eachBook">
        <div className="bookDetails">
          <p className="genre">Science Fiction</p>
          <h2 className="bookTitle">Dune</h2>
          <p>Frank Herbert</p>
          <div className="commentRemoveEditDiv">
            <p className="commentRemoveEditEffects">Comments</p>
            <p className="commentRemoveEditEffects">Remove</p>
            <p className="commentRemoveEditEffects">Edit</p>
          </div>
        </div>
        <div className="completedRing">
          <div className="ring">.</div>
          <div>
            <h2 className="percent">8%</h2>
            <span>Completed</span>
          </div>
        </div>
        <div className="currentChapter">
          <div className="line">.</div>
          <div>
            <p className="chapterDetails">CURRENT CHAPTER</p>
            <p className="chapterNumber">Chapter 3: &quot; A Lesson Learned &quot;</p>
            <button type="button" className="progressButton">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
    <div className="eachBookDiv">
      <div className="eachBook">
        <div className="bookDetails">
          <p className="genre">Economy</p>
          <h2 className="bookTitle">Capital in the Twenty-First Century</h2>
          <p>Susanne Collins</p>
          <div className="commentRemoveEditDiv">
            <p className="commentRemoveEditEffects">Comments</p>
            <p className="commentRemoveEditEffects">Remove</p>
            <p className="commentRemoveEditEffects">Edit</p>
          </div>
        </div>
        <div className="completedRing">
          <div className="ring">.</div>
          <div>
            <h2 className="percent">0%</h2>
            <span>Completed</span>
          </div>
        </div>
        <div className="currentChapter">
          <div className="line">.</div>
          <div>
            <p className="chapterDetails">CURRENT CHAPTER</p>
            <p className="chapterNumber">Introduction</p>
            <button type="button" className="progressButton">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
    <Form />
  </div>
);

export default Books;
