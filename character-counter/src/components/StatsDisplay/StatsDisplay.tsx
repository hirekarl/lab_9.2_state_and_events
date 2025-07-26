import { type ReactNode } from "react"
import { type StatsDisplayProps, type TextStats } from "../../types"
import CharacterCounter from "../CharacterCounter/CharacterCounter"
import { numberToTimeString } from "../../utils"

const minWords: number = 1
const maxWords: number = 400
const targetReadingTime: number = 2 // minutes
const WORDCOUNT_WARNING_THRESHOLD: number = 0.8

export default function StatsDisplay({
  stats,
  showReadingTime,
}: StatsDisplayProps): ReactNode {
  const { characterCount, wordCount, readingTime }: TextStats = stats

  const characterCountString = characterCount.toLocaleString("en-US")

  let styledWordCountDiv: ReactNode
  switch (true) {
    case wordCount < minWords:
    case wordCount >= maxWords:
      styledWordCountDiv = <div className="fs-3 text-danger">{wordCount}</div>
      break
    case wordCount >= maxWords * WORDCOUNT_WARNING_THRESHOLD:
      styledWordCountDiv = <div className="fs-3 text-warning">{wordCount}</div>
      break
    default:
      styledWordCountDiv = <div className="fs-3">{wordCount}</div>
      break
  }

  let styledReadingTimeDiv: ReactNode
  const readingTimeString = numberToTimeString(readingTime)
  switch (true) {
    case readingTime > targetReadingTime:
      styledReadingTimeDiv = (
        <div className="fs-3 text-danger">{readingTimeString}</div>
      )
      break
    default:
      styledReadingTimeDiv = <div className="fs-3">{readingTimeString}</div>
  }

  return (
    <>
      <div className="d-flex justify-content-between text-center mb-3 mx-3">
        <div>
          <div className="text-muted">Characters</div>
          <div className="fs-3">{characterCountString}</div>
        </div>
        <div>
          <div className="text-muted">Words</div>
          {styledWordCountDiv}
        </div>
        {showReadingTime && (
          <div>
            <div className="text-muted">Reading Time</div>
            {styledReadingTimeDiv}
          </div>
        )}
      </div>
      <CharacterCounter
        minWords={minWords}
        maxWords={maxWords}
        targetReadingTime={targetReadingTime}
      />
    </>
  )
}
