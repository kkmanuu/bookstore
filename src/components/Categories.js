import { useSelector, useDispatch } from 'react-redux';
import '../styles/categories.css';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categories.underconstruction);
  const dispatch = useDispatch();

  return (
    <div className="CategoriesDiv">
      <button type="button" className="constructionButton" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <div>{status}</div>
    </div>
  );
};

export default Categories;
