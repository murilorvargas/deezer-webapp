import React from 'react';
import { FiSearch } from 'react-icons/fi'

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <div>
        <img src="/images/logo.png" alt="deezer" />

        <form>
          <input type="text" placeholder="Artistas, músicas ou álbuns"/>
          <button type="submit"><FiSearch /></button>    
        </form>
      </div>
    </Container>
  )
}

export default Header;