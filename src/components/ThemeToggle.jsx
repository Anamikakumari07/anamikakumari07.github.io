import { useEffect, useState } from "react"

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      return savedTheme === "dark"
    }

    return true
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      <span>{dark ? "☀️" : "🌙"}</span>
    </button>
  )
}

export default ThemeToggle