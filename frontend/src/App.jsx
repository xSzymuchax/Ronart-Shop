import { useState } from 'react'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import About from './views/About.jsx'
import Cooperation from './views/Cooperation.jsx'
import MainPage from './views/MainPage.jsx'
import Terms from './views/Terms.jsx'

function App() {
  const [winter, setWinter] = useState(false)
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState('home')
  const season = winter ? 'winter' : 'summer'

  return (
    <div
      data-theme={dark ? `dark-${season}` : season}
      className="flex min-h-screen flex-col bg-[var(--page)]"
    >
      <Banner
        dark={dark}
        page={page}
        onNavigate={setPage}
        onToggleTheme={() => setWinter((value) => !value)}
        onToggleDark={() => setDark((value) => !value)}
      />
      {page === 'about' ? (
        <About />
      ) : page === 'cooperation' ? (
        <Cooperation />
      ) : page === 'terms' ? (
        <Terms />
      ) : (
        <MainPage />
      )}
      <Footer page={page} onNavigate={setPage} />
    </div>
  )
}

export default App
