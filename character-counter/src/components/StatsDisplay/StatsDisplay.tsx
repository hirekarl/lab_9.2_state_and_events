import { type ReactNode } from "react"
import { type StatsDisplayProps, type TextStats } from "../../types"
import { numberToTimeString } from "../../utils"
import CharacterCounter from "../CharacterCounter/CharacterCounter"
import {
  MAX_WORDS,
  MIN_WORDS,
  TARGET_READING_TIME,
  WORDCOUNT_WARNING_THRESHOLD,
} from "../../constants"

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

  // Only propagate styledReadingTimeDiv if showReadingTime is true
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
