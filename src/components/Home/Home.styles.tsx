import styled from "styled-components";

export const Headline = styled.div`
  margin: 120px 0 40px 0;
  height: calc(100vh - 260px);

  h1 {
    margin: 0;
    line-height: 1.2;
  }

  p {
    margin-top: 24px;
    color: #888;
    font-size: 20px;
    width: 60%;
    line-height: 1.6;
  }

  @media (max-width: 960px) {
    p {
      width: 100%;
    }
  }
`;
