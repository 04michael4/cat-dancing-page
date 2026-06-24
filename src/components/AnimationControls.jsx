function AnimationControls({ isDancing, onToggle, speed, onSpeedChange }) {
  return (
    <div className="controls">
      <button
        type="button"
        className="toggle-button"
        onClick={onToggle}
        aria-pressed={isDancing}
      >
        {isDancing ? '⏸ 정지' : '▶ 댄스 시작'}
      </button>

      <label className="speed-label" htmlFor="speed-range">
        속도
        <input
          id="speed-range"
          type="range"
          min="0.4"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          aria-label="애니메이션 속도 조절"
        />
      </label>
    </div>
  )
}

export default AnimationControls
