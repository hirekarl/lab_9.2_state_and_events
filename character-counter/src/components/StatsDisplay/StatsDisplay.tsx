import { type ReactNode } from "react"
import { type StatsDisplayProps, type TextStats } from "../../types"

export default function StatsDisplay({
  stats,
  showReadingTime,
}: StatsDisplayProps): ReactNode {
  const { characterCount, wordCount, readingTime }: TextStats = stats

  function displayReadingTime(): string {
    const minutes = Math.floor(readingTime)
    const seconds = Math.floor((readingTime - minutes) * 60)

    return `${minutes}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div className="d-flex justify-content-between text-center">
      <div>
        <div>Characters</div>
        <div>{characterCount}</div>
      </div>
      <div>
        <div>Words</div>
        <div>{wordCount}</div>
      </div>
      {showReadingTime && (
        <div>
          <div>Reading Time</div>
          <div>{displayReadingTime()}</div>
        </div>
      )}
    </div>
  )
}
