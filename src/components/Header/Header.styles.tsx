import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 20px;
  /* border-bottom: 1px solid #e4e4e4; */
`;

export const Links = styled.ul`
  display: inline;
  margin: 0;
  padding: 0;

  li {
    color: #888;
    display: inline;
    list-style-type: none;
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
    }

    a {
      color: #888;
    }
  }

  a:hover {
    text-decoration: underline;
    color: black;
  }
`;

export const LogoContainer = styled(Link)`
  img {
    height: 16px;
  }
`;
