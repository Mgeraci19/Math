import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import villian from './assets/villian.png'
import './App.css'
import { Modifier } from './components/Modifiers'
import { CountContainer } from './components/CountContainer'

function App() {
  const [villianCount, setVillianCount] = useState(999)
  const [heroCount, setHeroCount] = useState(1)

  return (
    <>
      <header>
        Math Clash
      </header>
      <div className='columns'>
        <nav>Stats:</nav>

        <div>

  
        <main className='main-screen'>

          <div className='hero-container'>
            <img className='hero-img' src={viteLogo} alt='Hero' />
            <CountContainer count={heroCount}/>
          </div>

          <div className='villian-container'>
            <img className='villian-img' src={villian} alt='Villian' />
            <CountContainer count={villianCount}/>
          </div>
                </main>
        </div>
      </div>
      <footer className='cards'>
          <Modifier clickHandler={() => setVillianCount(villianCount - 1)} name='Subtract' />
          <Modifier clickHandler={() => setVillianCount(villianCount * 2)} name='Double' />
      </footer>

</>
  )
}

export default App
