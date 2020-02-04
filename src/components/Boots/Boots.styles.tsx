import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0 100px 0;

  h1 {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    h1 {
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 14px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }
`;

export const FilterButton = styled.div`
  cursor: pointer;
`;
