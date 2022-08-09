import PropTypes from 'prop-types';
import { Item, RemoveBtn } from './ContactsItem-styled';

export const ContactsItem = ({ item, delateContact }) => {
  return (
    <Item>
      <p>name: {item.name}</p>
      <p>number: {item.number}</p>
      <RemoveBtn type="button" onClick={() => delateContact(item.id)}>
        Delete 
      </RemoveBtn>
    </Item>
  );
};

ContactsItem.propTypes = {
  delateContact: PropTypes.func,
  item: PropTypes.objectOf(PropTypes.string),
};