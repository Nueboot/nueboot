import { Link } from '@reach/router';
import styled from 'styled-components';

const NavLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export default NavLink;
