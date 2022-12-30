import styled from "styled-components";

const ControlsWrapper = styled.div`
  padding: 1.5rem;
  padding-top: 0.5rem;
  margin-top: 1.2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.toggleBackground};
`;

export default ControlsWrapper;
