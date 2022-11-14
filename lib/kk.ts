import { randomElement } from "./helpers"

const MAX_ITERATIONS = 1000

const kk = (
  users: string[],
  exceptions: Map<string, string[]>,
  iteration = 0
): Map<string, string> => {
  if (users.length <= 1) throw new Error("Not enough users")
  if (iteration >= MAX_ITERATIONS) throw new Error("Too many iterations")

  const pool = new Set(users)
  const pairs = new Map()
  let valid = true

  users.forEach(user => {
    const possibles = Array.from(pool)
      .filter(possible => possible !== user)
      .filter(possible => !exceptions.get(user)?.includes(possible))

    const rando = randomElement(possibles)
    if (!rando) valid = false
    pairs.set(user, rando)
    pool.delete(rando)
  })

  pairs.forEach((gifter, giftee) => {
    if (gifter === giftee || (exceptions.get(gifter) || []).includes(giftee))
      valid = false
  })

  return valid ? pairs : kk(users, exceptions, iteration + 1)
}

export default kk
