import '../styles/animations.css'

function DancingCat({ isDancing, speed }) {
  return (
    <div
      className={`dancing-cat ${isDancing ? 'is-dancing' : ''}`}
      style={{ '--dance-speed': `${speed}s` }}
    >
      <svg
        className="cat-svg"
        viewBox="0 0 200 200"
        width="220"
        height="220"
        role="img"
        aria-label="춤추는 고양이"
      >
        <ellipse className="cat-shadow" cx="100" cy="185" rx="55" ry="10" fill="#000" opacity="0.08" />

        <g className="cat-tail">
          <path
            d="M150 140 Q185 130 180 95 Q177 75 158 78"
            fill="none"
            stroke="#f0a868"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </g>

        <ellipse className="cat-body" cx="100" cy="150" rx="42" ry="34" fill="#f7b96e" />

        <g className="cat-ear cat-ear-left">
          <polygon points="55,70 70,30 90,68" fill="#f7b96e" />
          <polygon points="62,65 71,42 82,63" fill="#f48fb1" />
        </g>
        <g className="cat-ear cat-ear-right">
          <polygon points="145,70 130,30 110,68" fill="#f7b96e" />
          <polygon points="138,65 129,42 118,63" fill="#f48fb1" />
        </g>

        <g className="cat-head">
          <circle cx="100" cy="92" r="46" fill="#f9c685" />
          <circle cx="80" cy="88" r="7" fill="#2b2b2b" />
          <circle cx="120" cy="88" r="7" fill="#2b2b2b" />
          <circle cx="82" cy="86" r="2" fill="#fff" />
          <circle cx="122" cy="86" r="2" fill="#fff" />
          <polygon points="100,100 94,108 106,108" fill="#f48fb1" />
          <path d="M100 108 Q100 113 94 114" fill="none" stroke="#5a4636" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 108 Q100 113 106 114" fill="none" stroke="#5a4636" strokeWidth="2" strokeLinecap="round" />
          <g stroke="#5a4636" strokeWidth="1.5" strokeLinecap="round">
            <line x1="60" y1="100" x2="35" y2="96" />
            <line x1="60" y1="106" x2="35" y2="108" />
            <line x1="140" y1="100" x2="165" y2="96" />
            <line x1="140" y1="106" x2="165" y2="108" />
          </g>
        </g>

        <g className="cat-paw cat-paw-left">
          <ellipse cx="72" cy="178" rx="14" ry="11" fill="#f9c685" />
        </g>
        <g className="cat-paw cat-paw-right">
          <ellipse cx="128" cy="178" rx="14" ry="11" fill="#f9c685" />
        </g>
      </svg>
    </div>
  )
}

export default DancingCat
