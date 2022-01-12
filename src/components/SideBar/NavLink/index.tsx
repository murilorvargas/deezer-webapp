import React, { ReactNode } from 'react';
import { ActiveLink } from '../../ActiveLink';

import { Container } from './styles';

interface NavLinkProps { 
  title: string;
  href: string;
  icon: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href, icon }) => {
  return (
    <ActiveLink href={href} activeClassName="active">
      <Container>
        {icon}
        <span>{title}</span>
      </Container>
    </ActiveLink>
  );
}

export default NavLink;