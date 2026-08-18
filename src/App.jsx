import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* header */}
      <header>
        <section className='wrap-h'>
          <section className="h-1">
            <img src="https://kotsumet-official-store.com/cdn/shop/files/300-min1025_7b123e1c-2a24-4250-9928-993c0d6d5fb1_160x.png?v=1635132910" alt="KOTSUMET" />
            <ul>
              <li>MERCH</li>
              <li>INFO</li>
              <li>NEWS</li>
              <li>ABOUT</li>
              <li>SOCIAL</li>
            </ul>
            <ul>
              <li>💻</li>
              <li>🔍</li>
              <li>🛒</li>
            </ul>
          </section>
          
        </section>
      </header>

      {/* main */}
      <main>

      </main>

      {/* footer */}
      <footer>

      </footer>
    </div>
  )
}

export default App
