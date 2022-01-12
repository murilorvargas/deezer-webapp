import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  background: ${props => props.theme.colors.gray900};
  color: ${props => props.theme.colors.gray50};
  -webkit-font-smoothing: antialiased;
}

h1,h2,h3,h4,h5,h6,strong {
  font-weight: 500;
}

body,
input,
select,
textarea,
button {
  font: 400 1.6rem 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`