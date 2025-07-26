import { type ReactNode } from "react"
import { type CharacterCounterProps } from "../../types"

export default function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps): ReactNode {
  return (
    <div>
      <h2>CharacterCounter</h2>
      {(minWords || maxWords || targetReadingTime) && (
        <ul>
          {minWords && <li>minWords: {minWords}</li>}
          {maxWords && <li>maxWords: {maxWords}</li>}
          {targetReadingTime && <li>targetReadingTime: {targetReadingTime}</li>}
        </ul>
      )}
    </div>
  )
}
