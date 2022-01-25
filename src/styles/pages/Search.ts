import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;

    > div:nth-child(2) {
        margin-top: 60px;
        margin-bottom: 60px;
    }
`;
