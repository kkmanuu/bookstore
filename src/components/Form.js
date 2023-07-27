const Form = () => (
  <form className="addBookDiv">
    <div className="addBook">
      <h3>ADD NEW BOOK</h3>
      <input placeholder="Book Title" />
      <select>
        <option value="Category">Author</option>
        <option value="Action">Susanne</option>
        <option value="Action">Frank</option>
        <option value="Action">Karl Max</option>
      </select>
      <button type="button" className="addBookButton">ADD BOOK</button>
    </div>
  </form>
);

export default Form;
