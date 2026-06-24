import { useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import useAnimation from './hooks/useAnimation'

function App() {
  const { isDancing, toggle, speed, setSpeed } = useAnimation(1)

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  return (
    <Layout>
      <div
        className="stage"
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault()
            toggle()
          }
        }}
        aria-pressed={isDancing}
        aria-label="고양이를 클릭해서 춤 시작/정지"
      >
        <DancingCat isDancing={isDancing} speed={speed} />
      </div>

      <AnimationControls
        isDancing={isDancing}
        onToggle={toggle}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </Layout>
  )
}

export default App
