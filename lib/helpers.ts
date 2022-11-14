export const shuffleArray = <T, _>(arr: T[]): T[] =>
  arr
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)

export const repeater = (n: number) => (fn: () => void) =>
  [...Array(n)].forEach(fn)

export const nextInArray = <T>(a: Array<T>, i: number) =>
  i === a.length - 1 ? a[0] : a[i + 1]

export const prevInArray = <T>(a: Array<T>, i: number) =>
  i === 0 ? a[a.length - 1] : a[i - 1]

export const randomElement = <T>(a: Array<T>) =>
  a[Math.floor(Math.random() * a.length)]
