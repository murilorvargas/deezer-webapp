import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;

  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.colors.gray800};

  > div:nth-child(1) {
    display: flex;
    align-items: center;

    > img {
      height: 80px;
      border-radius: 24px;
    }

    > div {
      margin-left: 16px;

      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
        color: ${props => props.theme.colors.gray200}
      }
    }
  }

  > div:nth-child(2) {
    margin-right: 16px;

    display: flex;
    align-items: center;

    > span {
      margin-right: 8px;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.gray200}
    }

    > div {
      border-left: 1px solid ${props => props.theme.colors.gray600};

      display: flex;
      align-items: center;
      
      > button {
        height: 32px;
        width: 32px;
        margin-left: 24px;

        border: 0 none;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${props => props.theme.colors.purple500};

        transition: filter 0.2s;

        svg {
          color: ${props => props.theme.colors.gray50};
        }

        &:hover {
          filter: brightness(0.8);
        }
      }

      > a {
        height: 32px;
        width: 32px;
        margin-left: 8px;

        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${props => props.theme.colors.purple500};

        transition: filter 0.2s;

        svg {
          color: ${props => props.theme.colors.gray50};
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  &:hover {
    background: ${props => props.theme.colors.gray700};
  }
`;
