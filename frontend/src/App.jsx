import { useState } from 'react'
import Banner from './components/Banner.jsx'
import MainPage from './views/MainPage.jsx'

function App() {
  const [winter, setWinter] = useState(false)
  const [dark, setDark] = useState(false)
  const season = winter ? 'winter' : 'summer'

  return (
    <div
      data-theme={dark ? `dark-${season}` : season}
      className="flex min-h-screen flex-col"
    >
      <Banner
        dark={dark}
        onToggleTheme={() => setWinter((value) => !value)}
        onToggleDark={() => setDark((value) => !value)}
      />
      <MainPage />
    </div>
  )
}

export default App
