import React from 'react';
import NavLink from './NavLink';
import { FiHeadphones,FiHeart } from 'react-icons/fi';
import { FiX } from 'react-icons/fi'

import { useSidebar } from '../../context/SidebarContext';
import { useWidth } from '../../hooks/useWidth';

import { Container, ContainerMobile } from './styles';

const Sidebar: React.FC = () => {
  const { sidebar, setSidebar } = useSidebar();
  
  let windowWidth = useWidth()

  const handleCloseSidebar = () => {
    setSidebar(false)
  }

  if (windowWidth < 768) {
    return (
      <ContainerMobile className={sidebar && "active"}>
          <div>
            <img src="/images/logo.png" alt="deezer" />
            <button onClick={handleCloseSidebar}>
              <FiX />
            </button>
          </div>
          <div>
            <h2>GERAL</h2>
            <NavLink title="Músicas" href="/" icon={<FiHeadphones />}/>
            <NavLink title="Favoritas" href="/favorites" icon={<FiHeart />}/>
          </div>
      </ContainerMobile>
    )
  }
  
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

export default Sidebar;