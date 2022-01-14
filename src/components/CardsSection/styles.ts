import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > div + div {
    margin-top: 10px;
  }
`;