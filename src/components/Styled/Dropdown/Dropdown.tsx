import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: white;
  :hover div {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  min-width: 6rem;
  text-align: right;
  > span {
    padding: 0.25rem 0;
    display: block;
  }
`;
