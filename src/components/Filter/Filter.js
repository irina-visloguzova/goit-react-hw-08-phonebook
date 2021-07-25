import { connect } from 'react-redux';
import { changeFilter, getFilterValue } from '../../redux/contacts';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.formNameTitle }>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={s.formNameInput}></input>
  </label>
);

const mapStateToProps = state => ({
  value: getFilterValue(state),
});

const mapDispatchFromProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);