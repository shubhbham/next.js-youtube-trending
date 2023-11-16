"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className="absolute px-36 sm:-mt-8  -mt-9" onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <FaMoon className='text-cyan-200'/> : <FaSun className='text-amber-300' />}
    </button>
  )
}

export default DarkModeButton

// className='absolute right-4 bottom-4 ' 