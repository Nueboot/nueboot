import { Link } from '@reach/router';
import styled from 'styled-components';

const NavLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: underline solid rgb(0, 0, 0, 0.8);
  }
`;

export default NavLink;
