import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.colors.gray800};

  > div {
    max-width: 1120px;
    height: 80px;
    margin: 0 auto;
    padding: 0 2rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    > img {
      width: 144px;
    }
    > form {
      height: 46px;
      width: 480px;
      padding: 16px 32px;
      border-radius: 32px;
      
      display: flex;
      justify-content: space-between;
      align-items: center;

      background: ${props => props.theme.colors.gray800};
      color: ${props => props.theme.colors.gray200};

      > input {
        text-decoration: none;
        border: 0 none;

        background: ${props => props.theme.colors.gray800};
        color: ${props => props.theme.colors.gray50};

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: ${props => props.theme.colors.gray400};
        }
      }

      > button {
        border: 0 none;

        background: ${props => props.theme.colors.gray800};
        color: ${props => props.theme.colors.gray50};

        > svg {
          font-size: 20px;
        }
      }
    }
  }
`;
