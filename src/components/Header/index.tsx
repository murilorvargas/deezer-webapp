import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi'

import { useSidebar } from '../../context/SidebarContext';
import useWidth from '../../hooks/useWidth';

import { Container } from './styles';

const Header = () => {
  let windowWidth = useWidth()
  const { sidebar, setSidebar } = useSidebar();
  const [search, setSearch] = useState<string>()
  const router = useRouter()

  const handleOpenSidebar = () => {
    setSidebar(true)
  }
  
  const handleSearch = async () => {
    router.push(`/search/${search.normalize("NFD").trim().replace(/\s+/g, ' ').replace(/[^a-zA-Zs]/g, "+")}`)
    setSearch("")
  }

  const handleKeyPress = (e) => {if (e.key === 'Enter') handleSearch()}
  const handleOnChange = (e) => setSearch(e.target.value)

  return (
    <Container>
      <div>
        { windowWidth < 768 ? (
          <button onClick={handleOpenSidebar}>
            <FiMenu />
          </button>
        ) : (
          <img src="/images/logo.png" alt="deezer" />
        )}
        <div>
          <input type="text" placeholder="Músicas" onKeyPress={handleKeyPress} onChange={handleOnChange} value={search} />
          <button type="button" onClick={handleSearch}><FiSearch /></button>    
        </div>
      </div>
    </Container>
  )
}

export default Header;