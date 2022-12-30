import styled from "styled-components";

const InputWrapper = styled.input`
  background-color: ${({ theme }) => theme.screenBackground};
  height: 5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.headerColor};
  font-size: 2rem;
  font-weight: 700;
  text-align: end;
  caret-color: transparent;
`;

export default InputWrapper;
