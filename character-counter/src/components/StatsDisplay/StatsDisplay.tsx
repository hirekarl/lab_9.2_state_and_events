import { type ReactNode } from "react"
import { type StatsDisplayProps, type TextStats } from "../../types"
import CharacterCounter from "../CharacterCounter/CharacterCounter"
import { numberToTimeString } from "../../utils"

const WORDCOUNT_WARNING_THRESHOLD: number = 0.8

// CharacterCounter props
// (required here; optional when passing to CharacterCounter)
const MIN_WORDS: number = 1
const MAX_WORDS: number = 400
const TARGET_READING_TIME: number = 2 // minutes

export default function StatsDisplay({
  stats,
  showReadingTime,
}: StatsDisplayProps): ReactNode {
  const { characterCount, wordCount, readingTime }: TextStats = stats

  const characterCountString = characterCount.toLocaleString("en-US")

  // Style word count with "text-danger" if out of range
  // Style word count with "text-warning" if approaching max range
  let styledWordCountDiv: ReactNode
  const wordCountString = characterCount.toLocaleString("en-US")
  switch (true) {
    case wordCount < MIN_WORDS:
    case wordCount >= MAX_WORDS:
      styledWordCountDiv = (
        <div className="fs-3 text-danger">{wordCountString}</div>
      )
      break
    case wordCount >= MAX_WORDS * WORDCOUNT_WARNING_THRESHOLD:
      styledWordCountDiv = (
        <div className="fs-3 text-warning">{wordCountString}</div>
      )
      break
    default:
      styledWordCountDiv = <div className="fs-3">{wordCount}</div>
      break
  }

  // Style reading time with "text-danger" if above targetReadingTime max range
  let styledReadingTimeDiv: ReactNode
  if (showReadingTime) {
    const readingTimeString = numberToTimeString(readingTime)
    if (readingTime > TARGET_READING_TIME) {
      styledReadingTimeDiv = (
        <div className="fs-3 text-danger">{readingTimeString}</div>
      )
    } else {
      styledReadingTimeDiv = <div className="fs-3">{readingTimeString}</div>
    }
  } else {
    styledReadingTimeDiv = null
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
        minWords={MIN_WORDS}
        maxWords={MAX_WORDS}
        targetReadingTime={TARGET_READING_TIME}
      />
    </>
  )
}
