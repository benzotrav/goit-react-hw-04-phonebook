import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 10px;
  }
`;

export const InputBox = styled(Field)`
  width: 300px;
  margin-top: 5px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0 black;
`;

export const SubmitBtn = styled.button`
  width: 140px;
  margin-top: 15px;
  padding: 4px;
  color: #000000;
  background-color: #ffffff;
  border: 50% solid red;
  border-radius: 5px;
  :hover,
  :focus {
    color: #000000;
    background-color: #ff0000;
  }
`;


export const Box = styled.div`
  width: 400px;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 7px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;