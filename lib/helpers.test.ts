import { nextInArray, prevInArray } from "./helpers"

describe("nextInArray", () => {
  const a = [0, 1, 2, 3, 4]

  it("gets the next item from the index", () => {
    expect(nextInArray(a, 0)).toBe(1)
    expect(nextInArray(a, 1)).toBe(2)
    expect(nextInArray(a, 2)).toBe(3)
    expect(nextInArray(a, 3)).toBe(4)
  })

  it("loops around", () => {
    expect(nextInArray(a, 4)).toBe(0)
  })
})

describe("prevInArray", () => {
  const a = [0, 1, 2, 3, 4]

  it("loops around", () => {
    expect(prevInArray(a, 0)).toBe(4)
  })

  it("gets the previous item from the index", () => {
    expect(prevInArray(a, 4)).toBe(3)
    expect(prevInArray(a, 3)).toBe(2)
    expect(prevInArray(a, 2)).toBe(1)
    expect(prevInArray(a, 1)).toBe(0)
  })
})
