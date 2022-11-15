import {
  arrayInsert,
  arrayInsertionPoints,
  arrayPrev,
  arrayRandom,
  arrayShuffle,
  arrayCheckoff,
  arrayRotate,
} from "./helpers"

const kk = (
  users: string[],
  exceptions: Map<string, string[]>
): Map<string, string> => {
  if (users.length <= 1) throw new Error("Not enough users")

  const todoList = arrayShuffle([...users])
  let results = [todoList.pop() as string]

  const validBefore = (insertingValue: string, index: number) => {
    const curr = results[index]
    return !exceptions.get(curr)?.includes(insertingValue)
  }

  const validAfter = (insertingValue: string, index: number) => {
    const prev = arrayPrev(results, index)
    return !exceptions.get(insertingValue)?.includes(prev)
  }

  const validResults = arrayCheckoff(todoList, (checkoff, subject) => {
    const possiblePositions = arrayInsertionPoints(results).filter(
      pos => validBefore(subject, pos) && validAfter(subject, pos)
    )

    if (possiblePositions.length > 0) {
      results = arrayInsert(results, arrayRandom(possiblePositions), subject)
      checkoff()
    }
  })

  if (!validResults) throw new Error("Bad results")

  const rotatedArray = arrayRotate(results)

  const resultsMap = new Map()
  results.forEach((result, index) => {
    resultsMap.set(result, rotatedArray[index])
  })

  return resultsMap
}

export default kk
