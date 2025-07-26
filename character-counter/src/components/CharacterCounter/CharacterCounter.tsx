import { type ReactNode } from "react"
import { type CharacterCounterProps } from "../../types"

import { numberToTimeString } from "../../utils"

export default function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps): ReactNode {
  function makeCharacterCounterString(): string {
    const displayStringItems: string[] = []

    if (minWords !== undefined) displayStringItems.push(`Min: ${minWords}`)
    if (maxWords !== undefined) displayStringItems.push(`Max: ${maxWords}`)
    if (targetReadingTime !== undefined)
      displayStringItems.push(
        `Target Reading Time: ${numberToTimeString(targetReadingTime)}`
      )

    return displayStringItems.join(" | ")
  }

  return <div className="text-center">{makeCharacterCounterString()}</div>
}
