import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: auto;
  height: 30px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  & + & {
    margin-top: 10px;
  }
`;

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
  color: #000000;
  background-color: #ffffff;
  border: 2px solid black;
  :hover,
  :focus {
    background-color: #ff0000;
  }
`;