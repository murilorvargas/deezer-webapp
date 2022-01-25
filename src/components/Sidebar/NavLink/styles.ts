import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.gray50};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: ${props => props.theme.colors.purple500};
  }

  > svg {
    font-size: 20px;
    margin-right: 4px;
  }
`;
