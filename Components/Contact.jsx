import React, { useContext } from 'react'
import { useTheme } from '../hooks/useTheme'

const Contact = ()=> {
  const [isDark] = useTheme()
  return (
    <main className={`contact-container ${isDark? 'dark' : ''}`}>
      <div>
        <h1>Developed by Ayush Upadhyay</h1>
        <h2>Contact at github@ayush81upadhyay</h2>
      </div>
    </main>
  )
}

export default Contact
