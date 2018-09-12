import styled from 'styled-components';

interface TextProps {
  readonly bold?: boolean;
}

const Text = styled.span`
  font-size: 1rem;
  color: rgba( 0, 0, 0, .9 );
  font-weight: ${(props: TextProps) => props.bold ? 700 : 400};
`;

export default Text;
