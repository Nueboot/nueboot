import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #777;
  transition: font-weight 0.15s ease-in;
  :hover {
    font-weight: 700;
  }
  :visited {
    text-decoration: none;
  }
`;

export default NavigationLink;
