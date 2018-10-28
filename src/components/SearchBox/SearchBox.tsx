import * as React from 'react';
import styled from 'styled-components';

import { SearchIcon } from '../Styled';

interface SearchBoxState {
  searchText: string;
}

export interface DispatchProps {
  onSearch(queryString: string): void;
}

export default class SearchBox extends React.PureComponent<
  DispatchProps,
  SearchBoxState
> {
  public state = {
    searchText: '',
  };

  public render() {
    return (
      <SearchBoxContainer>
        <Input
          placeholder="search"
          value={this.state.searchText}
          onChange={this.onSearchInput}
          onKeyPress={this.onSearchEnter}
        />
        <Icon onClick={this.onIconClick}>
          <SearchIcon />
        </Icon>
      </SearchBoxContainer>
    );
  }

  private onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    this.setState({
      searchText,
    });
  };

  private onSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.setState({ searchText: '' });
      this.props.onSearch(this.state.searchText);
    }
  };

  private onIconClick = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ searchText: '' });
    this.props.onSearch(this.state.searchText);
  };
}

const Icon = styled.div`
  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-left: -2.75rem;
    fill: slategrey;
  }
  svg:hover {
    fill: black;
  }
  cursor: pointer;
`;

const Input = styled.input`
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1.25rem;
  background: rgba(255, 255, 255, 0.75);
  width: 70%;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;
