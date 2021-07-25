import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css'

const ContactList = ({ children }) => (
  <ul className={s.list}>{children}</ul>
);

ContactList.propTypes = {
  children: PropTypes.node,
};

export default ContactList;