import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const Header = () => {
  const [isDark, setIsDark] = useTheme()
  return (
    <header className={`header-container ${isDark ? 'dark' : '' }`}>
        <div className='header-content'>
            <h2 className='title'>
                <Link to={`/`} style={{paddingRight: 50}}>Find your favourite country!</Link>
                <Link to={`/contact`}>Contact</Link>
            </h2>
            <p className='theme-changer' onClick={()=>{
              setIsDark(!isDark)  
              localStorage.setItem('isDarkMode', !isDark)
            }}>
                <i className={`fa-regular fa-solid fa-${isDark ? 'sun' : 'moon'}`}>{isDark? 'Light' : 'Dark'} Mode</i>
            </p>
        </div>
    </header>
  )
}

export default Header