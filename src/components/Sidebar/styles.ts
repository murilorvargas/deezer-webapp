import styled from 'styled-components';

export const Container = styled.aside`
  padding: 60px 112px 0 0;

  > div {
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 20px;
      font-size: 1.6rem;
      color: ${props => props.theme.colors.gray400}
    }

    a + a {
      margin-top: 10px;
    }
  }
`;

export const ContainerMobile = styled.aside`
  height: 100%;
  width: 310px;
  position: fixed;
  top: 0;
  left: -100%;
  padding: 0 2rem;
  
  background: ${props => props.theme.colors.gray950};
  
  transition: 850ms;

  > div:nth-child(1) {
    height: 80px;
    border-bottom: 1px solid ${props => props.theme.colors.gray800};

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 144px;
    }

    button {
      border: 0 none;
      background: ${props => props.theme.colors.gray950};
      
      color: ${props => props.theme.colors.gray50};
      
      svg {
        vertical-align: middle;
        font-size: 24px;
      }
    }
  }

  > div:nth-child(2) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 20px;
      font-size: 1.6rem;
      color: ${props => props.theme.colors.gray400}
    }

    a + a {
      margin-top: 10px;
    }
  }

  &.active {
    top:0;
    left: 0;
    transition: 350ms;
  }
`;
