export const shuffleArray = <T, _>(arr: T[]): T[] =>
  arr
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)

export const repeater = (n: number) => (fn: () => void) =>
  [...Array(n)].forEach(fn)
