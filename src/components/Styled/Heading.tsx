import styled from 'styled-components';

interface HeadingProps {
  readonly size?: 1 | 2;
}

const Heading = styled.h1`
  color: rgb(0, 0, 0);
  font-weight: 900;
  margin: 0;
  font-size: ${(props: HeadingProps) =>
    props.size === 2 ? `1.5rem` : `2.25rem`};
`;

export default Heading;
