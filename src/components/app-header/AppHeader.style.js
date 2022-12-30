import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: transparent;
  color: ${({ theme }) => theme.headerColor};
  .title {
    font-size: 1.3rem;
  }
  .themes-control {
    gap: 1.5rem;
    .title {
      font-size: 0.7rem;
    }
    .btns-box {
      width: 4.2rem;
      height: 1.5rem;
      background-color: ${({ theme }) => theme.toggleBackground};
      border-radius: 2rem;

      .btn-box > span {
        left: 50%;
        transform: translateX(-50%);
        top: -1.7rem;
        font-size: 0.7rem;
      }
    }
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.toggle};
  opacity: ${({ active }) => (active ? "1" : "0")};
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  border: none;
`;

export default HeaderWrapper;
