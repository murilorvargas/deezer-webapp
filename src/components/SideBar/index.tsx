import React from 'react';
import NavLink from './NavLink';
import { FiHeadphones,FiHeart } from 'react-icons/fi';

import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>GERAL</h2>
        <NavLink title="Músicas" href="/" icon={<FiHeadphones />}/>
        <NavLink title="Favoritas" href="/favorites" icon={<FiHeart />}/>
      </div>
    </Container>
  );
}

export default SideBar;