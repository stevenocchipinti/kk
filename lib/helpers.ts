export const repeater = (n: number) => (fn: () => void) =>
  [...Array(n)].forEach(fn)

export const arrayShuffle = <T, _>(arr: T[]): T[] =>
  arr
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)

export const arrayRandom = <T>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)]

export const arrayNext = <T>(arr: Array<T>, index: number) =>
  index === arr.length - 1 ? arr[0] : arr[index + 1]

export const arrayPrev = <T>(arr: Array<T>, index: number) =>
  index === 0 ? arr[arr.length - 1] : arr[index - 1]

export const arrayInsert = <T>(arr: Array<T>, index: number, newElement: T) => {
  let localArr = [...arr]
  localArr.splice(index, 0, newElement)
  return localArr
}

export const arrayRotate = <T>(arr: Array<T>) => {
  let localArr = [...arr]
  if (localArr.length > 0) localArr.splice(0, 0, localArr.pop() as T)
  return localArr
}

export const arrayInsertionPoints = <T>(arr: Array<T>) => [...arr.keys()]

export const arrayCheckoff = <T>(
  arr: Array<T>,
  fn: (checkoff: () => void, value: T) => void
) => {
  let set = new Set([...arr])
  let didWork = true

  while (didWork) {
    didWork = false
    for (const value of set) {
      const checkoff = () => {
        set.delete(value)
        didWork = true
      }
      fn(checkoff, value)
    }
  }

  return set.size === 0
}
