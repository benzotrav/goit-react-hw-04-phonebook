import PropTypes from 'prop-types';
import { InputLable, InputBox, Title } from './Searcher-styled';

export const Searcher = ({ filter, onFilter }) => {
  return (
    <InputLable>
    <Title>Find contacts</Title>
      <InputBox type="text" name="filter" value={filter} onChange={onFilter} placeholder={"Search contacts"} />
    </InputLable>
  );
};

Searcher.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
};