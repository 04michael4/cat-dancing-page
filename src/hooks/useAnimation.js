import { useState, useCallback } from 'react'

function useAnimation(initialSpeed = 1) {
  const [isDancing, setIsDancing] = useState(false)
  const [speed, setSpeed] = useState(initialSpeed)

  const toggle = useCallback(() => {
    setIsDancing((prev) => !prev)
  }, [])

  return { isDancing, toggle, speed, setSpeed }
}

export default useAnimation
