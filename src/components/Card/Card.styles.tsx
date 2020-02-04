import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 2px 2px 6px rgba(133, 133, 133, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 14px;

  &:hover {
    box-shadow: 2px 2px 6px rgba(133, 133, 133, 0.5);
  }
`;

export const Content = styled.div``;

export const Image = styled.div`
  background: linear-gradient(119.65deg, #0db45a 0%, #d9e998 100%);
  border-radius: 4px;
  width: 131px;
  height: 118px;
`;

export const Info = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0;
    font-weight: 400;
    color: #828282;

    &:first-child {
      color: #000;
      margin-bottom: 4px;
    }
  }
`;

export const Stars = styled.div`
  font-size: 10px;
  color: #bdbdbd;
`;

export const Price = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #bdbdbd;
`;
