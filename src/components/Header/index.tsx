import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'

import { Container } from './styles';

const Header = () => {
  const [search, setSearch] = useState<string>()
  const router = useRouter()
  
  const handleSearch = async () => {
    router.push(`/search/${search.normalize("NFD").trim().replace(/\s+/g, ' ').replace(/[^a-zA-Zs]/g, "+")}`)
    setSearch("")
  }

  const handleKeyPress = (e) => {if (e.key === 'Enter') handleSearch()}
  const handleOnChange = (e) => setSearch(e.target.value)

  return (
    <Container>
      <div>
        <img src="/images/logo.png" alt="deezer" />

        <div>
          <input type="text" placeholder="Músicas" onKeyPress={handleKeyPress} onChange={handleOnChange} value={search} />
          <button type="button" onClick={handleSearch}><FiSearch /></button>    
        </div>
      </div>
    </Container>
  )
}

export default Header;