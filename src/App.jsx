import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h1 className='t'>Fordele og ulemper ved React</h1>
        <section className='list'>
          <ul>
            <h2>Fordele:</h2>
            <li>Man kan genbruge det kode man laver</li>
            <li>God til store projekter</li>
            <li>Mange virksomheder bruger det</li>
            <li>Stort fællesskab og mange ressourcer</li>
          </ul>
          <ul>
            <h2>Ulemper:</h2>
            <li>Ikke så god til små projekter</li>
            <li>Kan være svært at lære for begyndere</li>
            <li>Kræver ofte ekstra biblioteker for fuld funktionalitet</li>
          </ul>
        </section>
      </section>
    </>
  )
}

export default App
