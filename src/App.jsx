import { useState } from 'react'
import './App.css'

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton';

import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  )
}

export default App
