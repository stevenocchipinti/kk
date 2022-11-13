import { shuffleArray } from "./helpers"

const kk = (
  users: string[],
  exceptions: Map<string, string[]>
): Map<string, string> => {
  const shuffledUsers = shuffleArray([...users])

  const pairs = new Map()
  users.forEach((user, i) => {
    pairs.set(user, shuffledUsers[i])
  })

  return pairs
}

export default kk
