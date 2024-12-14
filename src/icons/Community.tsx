import { IconTypes } from './Icons'

export default function Community({
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
      viewBox='0 0 122.88 105.6'
      className={className}
      fill={color}
    >
      <path d='M26.89,0h44a8,8,0,0,1,7.94,7.93v22.8a8,8,0,0,1-7.94,7.94H40.61L28.56,49a1.32,1.32,0,0,1-1.88-.15,1.26,1.26,0,0,1-.32-.95L27,38.66h-.11A8,8,0,0,1,19,30.73V7.93A8,8,0,0,1,26.89,0ZM0,105.6c1-13,3.45-8.13,14.53-15.06,3.06,7.94,17.74,8.47,21,0C45.06,96.65,49.84,92,49.77,105.6ZM18,89.92a4.86,4.86,0,0,1,.49-1.72,6.94,6.94,0,0,1-2.74-5.08h-.15a2,2,0,0,1-1-.26,2.67,2.67,0,0,1-1.09-1.33c-.5-1.15-.9-4.2.37-5.07l-.24-.16,0-.34c-.05-.61-.06-1.35-.07-2.13,0-2.86-.1-6.33-2.41-7l-1-.3.66-.8a37.74,37.74,0,0,1,5.76-5.86,14.82,14.82,0,0,1,6.68-3.24,8,8,0,0,1,6.49,1.82,11.52,11.52,0,0,1,1.74,1.75,7.34,7.34,0,0,1,5.2,3,10.42,10.42,0,0,1,1.69,3.42,11.52,11.52,0,0,1,.46,3.87,9.29,9.29,0,0,1-2.7,6.28,1.84,1.84,0,0,1,.84.22,2.09,2.09,0,0,1,.74,2.56c-.25.78-.57,1.69-.87,2.45-.36,1-.89,1.22-1.92,1.11,0,2.54-1.22,3.79-2.8,5.29l.35,1.25c-1,4.84-11.59,5.37-14.46.27Zm29.83-4.46A8.28,8.28,0,0,1,44,83c2.58-1,3.77-3.58,3.94-8.14.12-3.38-.58-5.94.57-9.28,2.29-6.62,10.75-8.88,15.46-5,3.7-.39,7.43,1.52,8.23,7.21.59,4.26-.67,8,.67,11.89A6.1,6.1,0,0,0,76,83.44a9.15,9.15,0,0,1-4.22,2,42,42,0,0,1-6.64.74v2l2.32,3.7L60,97.74,52.51,92l1.65-3.55V86.25a29.34,29.34,0,0,1-6.35-.79ZM71.7,95.07a18.08,18.08,0,0,0-3.46-5.37c2.81,1.08,12.19,3.43,13.64,6.15,1.64,3.07,1.4,6.48,2.27,9.75H53.65c0-5.26-.55-8.43-1.72-10.51l7.84,6.27L68.14,95l3.56.08ZM46.76,91.19A50.14,50.14,0,0,0,51.7,89.7a14.64,14.64,0,0,0-2.16,2.85,13.83,13.83,0,0,0-2.78-1.36Zm44.94-.34a4.38,4.38,0,0,1,.45-1.6,6.56,6.56,0,0,1-2.57-4.78h-.14a2,2,0,0,1-.94-.25,2.55,2.55,0,0,1-1-1.24c-.48-1.09-.85-4,.34-4.78l-.22-.14,0-.32c0-.58-.06-1.27-.07-2,0-2.69-.1-6-2.26-6.6l-.93-.29.61-.75a35.38,35.38,0,0,1,5.42-5.5,13.7,13.7,0,0,1,6.28-3.05,7.52,7.52,0,0,1,6.1,1.7,11.64,11.64,0,0,1,1.64,1.65,6.93,6.93,0,0,1,4.89,2.85A9.9,9.9,0,0,1,110.84,69a10.88,10.88,0,0,1,.42,3.64,8.72,8.72,0,0,1-2.53,5.9,1.78,1.78,0,0,1,.79.2,2,2,0,0,1,.69,2.41c-.23.74-.53,1.59-.81,2.31-.34,1-.84,1.14-1.8,1,0,2.39-1.16,3.56-2.65,5l.34,1.17c-.94,4.55-10.9,5.05-13.59.25Zm-6.79,2.54a35.37,35.37,0,0,0,3.54-2c2.88,7.46,16.68,8,19.71,0,9,5.75,14.78,1.4,14.72,14.16H88a3.89,3.89,0,0,0-.13-1,27,27,0,0,1-.58-3.2,20.48,20.48,0,0,0-2-7.36,5.73,5.73,0,0,0-.39-.64ZM82.74,16.73a7.81,7.81,0,0,1,6.31,7.64v19a7.78,7.78,0,0,1-7.77,7.77H81l.65,9.43h0a1.17,1.17,0,0,1-1.93,1L67.63,50.81H35.11l7.84-8H76.17a6.62,6.62,0,0,0,6.59-6.6v-19c0-.18,0-.35,0-.53ZM30.8,24a1.34,1.34,0,0,1,0-2.68H61.39a1.34,1.34,0,0,1,0,2.68Zm0-9.18a1.34,1.34,0,0,1,0-2.67H67.24a1.34,1.34,0,1,1,0,2.67ZM70.91,2.68h-44a5.28,5.28,0,0,0-5.26,5.25v22.8A5.29,5.29,0,0,0,26.89,36h1.63a1.34,1.34,0,0,1,1.24,1.42l-.52,7.5,9.94-8.54a1.32,1.32,0,0,1,.94-.39H70.91a5.29,5.29,0,0,0,5.26-5.26V7.93a5.28,5.28,0,0,0-5.26-5.25Z' />
    </svg>
  )
}