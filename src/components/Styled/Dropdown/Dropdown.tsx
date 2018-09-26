import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  :hover div {
    display: block;
  }
  :focus-within div {
    display: block;
  }
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  min-width: 100%;
  text-align: right;
  background-color: white;
  padding: 0.25rem 0;
  > span {
    padding: 0.25rem 0;
    display: block;
  }
`;
