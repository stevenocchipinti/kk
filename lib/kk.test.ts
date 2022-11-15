import kk from "./kk"
import { repeater } from "./helpers"

const ITERATIONS = 100
const repeat = repeater(ITERATIONS)

const testCases = [
  {
    testCase: "Simple",
    exceptions: new Map([
      ["a", []],
      ["b", []],
      ["c", []],
    ]),
  },
  {
    testCase: "Simple couples",
    exceptions: new Map([
      ["a1", ["a2"]],
      ["a2", ["a1"]],
      ["b1", ["b2"]],
      ["b2", ["b1"]],
      ["c1", ["c2"]],
      ["c2", ["c1"]],
    ]),
  },
  {
    testCase: "Picky A's",
    exceptions: new Map([
      ["a1", ["a2", "b1", "b2"]],
      ["a2", ["a1", "b1", "b2"]],
      ["b1", ["b2"]],
      ["b2", ["b1"]],
      ["c1", ["c2"]],
      ["c2", ["c1"]],
    ]),
  },
  // BUG: This has a valid solution but doesn't work
  /* { */
  /*   testCase: "A simple circular solution", */
  /*   exceptions: new Map([ */
  /*     ["a", ["c", "d", "e"]], // b */
  /*     ["b", ["d", "e", "a"]], // c */
  /*     ["c", ["e", "a", "b"]], // d */
  /*     ["d", ["a", "b", "c"]], // e */
  /*     ["e", ["b", "c", "d"]], // a */
  /*   ]), */
  /* }, */
  {
    testCase: "Families",
    exceptions: new Map([
      ["couple-1-a", ["couple-1-b"]],
      ["couple-1-b", ["couple-1-a"]],
      ["couple-2-a", ["couple-2-b"]],
      ["couple-2-b", ["couple-2-a"]],
      ["couple-3-a", ["couple-3-b"]],
      ["couple-3-b", ["couple-3-a"]],
      ["family-1-a", ["family-1-b", "family-1-c"]],
      ["family-1-b", ["family-1-a", "family-1-c"]],
      ["family-1-c", ["family-1-a", "family-1-b"]],
      ["individual", []],
    ]),
  },
]

describe("kk", () => {
  testCases.forEach(({ testCase, exceptions }) => {
    const users = [...exceptions.keys()]
    describe(testCase, () => {
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
          pairs.forEach((giftee, gifter) => {
            expect(exceptions.get(gifter)).not.toContain(giftee)
          })
        })
      })
    })
  })
})
