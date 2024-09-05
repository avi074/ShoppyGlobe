import { Outlet } from "react-router"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import Footer from "./components/Footer"

function App() {
  const getThemeMode = () => localStorage.getItem("themeMode")
  const setThemeMode = (val) => localStorage.setItem("themeMode", val)

  const [darkMode, setDarkMode] = useState(getThemeMode() === "dark")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // setting the dark mode if user-agent is using dark-theme
  useEffect(() => {
    if (!getThemeMode()) {
      setDarkMode(window.matchMedia("(prefers-color-scheme:dark)").matches)
    }
  }, [])

  // setting the dark class to html tag & saving user theme preference
  useEffect(() => {
    const htmlElement = document.documentElement
    if (darkMode) {
      htmlElement.classList.add("dark")
      setThemeMode("dark")
    } else {
      htmlElement.classList.remove("dark")
      setThemeMode("light")
    }
  }, [darkMode])

  return (
    <div className="flex flex-col min-h-screen">
      <Header isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-grow my-2">
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
