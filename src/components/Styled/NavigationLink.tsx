import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #333;
  :hover {
    font-weight: 700;
  }
  :visited {
    text-decoration: none;
  }
`;

export default NavigationLink;
