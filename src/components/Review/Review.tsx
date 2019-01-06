import { BootReview } from 'api/types';
import Rating from 'components/Rating';
import { Text } from 'components/Styled';
import * as React from 'react';
import styled from 'styled-components';

const Review: React.SFC<BootReview> = ({ body, id, stars, user }) => {
  return (
    <ReviewSection>
      <TopSection>
        <UserInfo>
          <User>{user}</User>
          <Location>Los Angeles, CA</Location>
        </UserInfo>
        <StarRating stars={stars} />
      </TopSection>
      <Text>{body}</Text>
    </ReviewSection>
  );
};

export default Review;

const ReviewSection = styled.section`
  margin: 20px 0;
`;

const User = styled(Text)`
  display: inline;
  font-weight: bold;
  font-size: 18px;
`;

const UserInfo = styled.div`
  margin-bottom: 5px;
`;

const TopSection = styled(Text)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  div > {
    display: inline;
  }
`;

const Location = styled(Text)`
  display: block;
  color: gray;
`;

const StarRating = styled(Rating)`
  display: inline;
`;
