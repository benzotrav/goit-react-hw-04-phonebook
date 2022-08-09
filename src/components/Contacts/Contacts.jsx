import PropTypes from 'prop-types';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { Title, Box, ContactsBox } from './Contacts-styled';

export const Contacts = ({ contactsInfo, delateContact }) => {
  return (
    <Box>
      <Title>Contacts</Title>
      <ContactsBox>
        {contactsInfo.map(item => (
          <ContactsItem
            item={item}
            key={item.id}
            delateContact={delateContact}
          />
        ))}
      </ContactsBox>
    </Box>
  );
};

Contacts.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
};