import {
  arrayInsert,
  arrayInsertionPoints,
  arrayNext,
  arrayPrev,
  arrayCheckoff,
  arrayRotate,
} from "./helpers"

describe("nextInArray", () => {
  const a = [0, 1, 2, 3, 4]

  it("gets the next item from the index", () => {
    expect(arrayNext(a, 0)).toBe(1)
    expect(arrayNext(a, 1)).toBe(2)
    expect(arrayNext(a, 2)).toBe(3)
    expect(arrayNext(a, 3)).toBe(4)
  })

  it("loops around", () => {
    expect(arrayNext(a, 4)).toBe(0)
  })
})

describe("prevInArray", () => {
  const a = [0, 1, 2, 3, 4]

  it("loops around", () => {
    expect(arrayPrev(a, 0)).toBe(4)
  })

  it("gets the previous item from the index", () => {
    expect(arrayPrev(a, 4)).toBe(3)
    expect(arrayPrev(a, 3)).toBe(2)
    expect(arrayPrev(a, 2)).toBe(1)
    expect(arrayPrev(a, 1)).toBe(0)
  })
})

describe("arrayInsert", () => {
  const a = [1, 2, 3]

  it("inserts the new element at the given index", () => {
    expect(arrayInsert(a, 2, 2.5)).toEqual([1, 2, 2.5, 3])
  })
})

describe("arrayInsertionPoints", () => {
  it("returns all possible insertion indexes of an array", () => {
    const a = [1, 2, 3]
    expect(arrayInsertionPoints(a)).toEqual([0, 1, 2])
  })
})

describe("arrayCheckoff", () => {
  const a = [1, 2, 3]

  it("calls the function for each element of the array", () => {
    const fn = jest.fn()
    arrayCheckoff(a, fn)
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it("re-loops over the array if one of the items were checked off", () => {
    const fn = jest.fn((checkoff, value) => {
      if (value === 2) checkoff()
    })
    arrayCheckoff(a, fn)

    // 1st run: 1, 2, 3
    // 2nd run: 1, 3
    expect(fn).toHaveBeenCalledTimes(5)
  })

  it("returns true if all items were checked off", () => {
    const result = arrayCheckoff(a, checkoff => {
      checkoff()
    })

    expect(result).toBe(true)
  })

  it("returns false if not all items were checked off", () => {
    const result = arrayCheckoff(a, (checkoff, value) => {
      if (value === 2) checkoff()
    })

    expect(result).toBe(false)
  })
})

describe("arrayRotate", () => {
  it("rotates the array by one position", () => {
    expect(arrayRotate([1, 2, 3])).toEqual([3, 1, 2])
  })
})
