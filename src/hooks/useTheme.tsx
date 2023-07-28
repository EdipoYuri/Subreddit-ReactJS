import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useLayoutEffect
} from 'react'
import { ThemeProvider } from 'styled-components'

type TThemeContext = {
  toggleTheme: () => void,
  theme: TColors,
  selectedTheme: string
}

type TColors = {
  name: string,
  primary: string,
  primaryDark: string,
  background: string,
  text: string
}

const themes = {
  light: {
    name: 'light',
    primary: '#6324c6',
    primaryDark: '#340d73',
    background: '#FFFFFF',
    text: '#000000',
  },
  dark: {
    name: 'dark',
    primary: '#6324c6',
    primaryDark: '#340d73',
    background: '#000000',
    text: '#FFFFFF'
  }
}

const ThemeContext = createContext<TThemeContext>({} as TThemeContext)

export const useTheme = () => useContext(ThemeContext)

type TProps = {
  children?: ReactNode
}

export const CustomThemeProvider = ({ children }: TProps) => {
  const [selectedTheme, setSelectedTheme] = useState('light')
  const [theme, setTheme] = useState<TColors>(themes.light)

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light'

    const themeObject = localTheme === 'light' ? themes.light : themes.dark

    setSelectedTheme(localTheme)
    setTheme(themeObject)
  }, [])

  const toggleTheme = () => {
    setTheme(selectedTheme === 'light' ? themes.dark : themes.light)
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', selectedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
        selectedTheme
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider