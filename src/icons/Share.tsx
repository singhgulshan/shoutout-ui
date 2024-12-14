import { IconTypes } from './Icons'

export default function Share({
  color = 'currentColor',
  fontSize = '1.6rem',
  rotate = 0,
  className = '',
}: IconTypes) {
  return (
    <svg
      style={{
        width: '1em',
        height: '1em',
        fontSize,
        transform: `rotate(${rotate}deg)`,
      }}
      viewBox='0 0 512 512'
      className={className}
      fill={color}
    >
      <g>
        <path
          d='M512,230.431L283.498,44.621v94.807C60.776,141.244-21.842,307.324,4.826,467.379
		c48.696-99.493,149.915-138.677,278.672-143.14v92.003L512,230.431z'
        />
      </g>
    </svg>
  )
}
