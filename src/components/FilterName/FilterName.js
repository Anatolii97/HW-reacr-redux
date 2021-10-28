import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import './FilterName.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
     <div className="group-filter">
     <input
        value={filter}
        type="text"
        id="filter"
        required
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
         <span className="bar"></span>
         <label className="filter" name="filter" htmlFor="filter" value={filter}>
        Find contacts by name
      </label>
         </div>
  )
}
