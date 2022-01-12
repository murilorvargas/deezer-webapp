import styled from 'styled-components';

export const Container = styled.aside`
  
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
