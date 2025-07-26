import { type ReactNode } from "react"
import { type StatsDisplayProps, type TextStats } from "../../types"

export default function StatsDisplay({
  stats,
  showReadingTime,
}: StatsDisplayProps): ReactNode {
  const { characterCount, wordCount, readingTime }: TextStats = stats
  return (
    <div>
      <h2>StatsDisplay</h2>
      <ul>
        <li>characterCount: {characterCount}</li>
        <li>wordCount: {wordCount}</li>
        {showReadingTime && <li>readingTime: {readingTime}</li>}
      </ul>
    </div>
  )
}
