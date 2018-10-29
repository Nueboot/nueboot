import * as React from 'react';
import styled from 'styled-components';

export interface StarRatingProps {
  onClick(stars: number): void;
}

export interface StarRatingState {
  stars: number;
  currentStar: number;
}

export default class StarRating extends React.Component<
  StarRatingProps,
  StarRatingState
> {
  public constructor(props) {
    super(props);
    this.state = { stars: 1, currentStar: 1 };
  }

  public render() {
    return (
      <div className="star-rating">
        {new Array(5).fill('').map((_, i) => {
          if (i >= this.state.currentStar) {
            return (
              <Star
                onClick={() => this.props.onClick(i + 1)}
                onMouseEnter={() => this.onStarHover(i + 1)}
                key={i}
              >
                ★
              </Star>
            );
          }
          return (
            <GoldStar
              onClick={() => this.props.onClick(i + 1)}
              onMouseEnter={() => this.onStarHover(i + 1)}
              key={i}
            >
              ★
            </GoldStar>
          );
        })}
      </div>
    );
  }

  private onStarHover = (idx: number) => {
    this.setState({
      currentStar: idx,
    });
    this.props.onClick(idx);
  };
}

const Star = styled.span`
  cursor: pointer;
  color: lightslategray;
`;

const GoldStar = styled(Star)`
  color: gold;
`;
