type VerticalSpaceProps = {
  space: number | string
}

export default function VerticalSpace({ space }: Readonly<VerticalSpaceProps>) {
  function getSpace() {
    if (typeof space === 'number') {
      return `${space}px`
    }
    return space
  }

  return (
    <div
      style={{
        width: '100%',
        height: getSpace(),
        backgroundColor: 'transparent',
      }}
    />
  )
}
