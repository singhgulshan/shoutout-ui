export function getInitials(name: string) {
  return name
    .split(/\s+/)
    .reduce(
      (acc, word, index) => (index < 2 ? acc + word[0].toUpperCase() : acc),
      ''
    )
}
