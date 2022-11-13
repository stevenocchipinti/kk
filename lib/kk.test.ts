import kk from "./kk"
import { repeater } from "./helpers"

const ITERATIONS = 10
const repeat = repeater(ITERATIONS)

describe("kk", () => {
  const users = ["a1", "a2", "b1", "b2", "c1", "c2"]
  const exceptions = new Map([
    ["a1", ["a2"]],
    ["a2", ["a1"]],
    ["b1", ["b2"]],
    ["b2", ["b1"]],
    ["c1", ["c2"]],
    ["c2", ["c1"]],
  ])

  it("doesn't pair users with themselves", () => {
    repeat(() => {
      const pairs = kk(users, exceptions)

      expect(pairs.size).toBe(users.length)
      pairs.forEach((gifter, giftee) => {
        expect(gifter).not.toEqual(giftee)
      })
    })
  })

  it("doesn't pair users with their exceptions", () => {
    repeat(() => {
      const pairs = kk(users, exceptions)

      expect(pairs.size).toBe(users.length)
      pairs.forEach((gifter, giftee) => {
        expect(exceptions.get(gifter)).not.toContain(giftee)
      })
    })
  })
})
