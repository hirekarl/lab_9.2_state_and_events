import type { ReactNode } from "react"
import type { TextStats } from "./types"
import { useState } from "react"
import { countCharacters, countWords, calculateReadingTime } from "./utils"
import StatsDisplay from "./components/StatsDisplay/StatsDisplay"
import TextInput from "./components/TextInput/TextInput"
import { INITIAL_VALUE, PLACEHOLDER, SHOW_READING_TIME } from "./constants"

function App(): ReactNode {
  const textStatsInitialValue: TextStats = {
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  }
  const [textStats, setTextStats] = useState(textStatsInitialValue)

  function updateTextStats(newText: string): void {
    const newTextStats: TextStats = {
      characterCount: countCharacters(newText),
      wordCount: countWords(newText),
      readingTime: calculateReadingTime(countWords(newText)),
    }
    setTextStats(newTextStats)
  }

  return (
    <div className="container">
      <h1 className="my-4 text-center">Lab 9.2: State &amp; Events</h1>
      <TextInput
        onTextChange={updateTextStats}
        placeholder={PLACEHOLDER}
        initialValue={INITIAL_VALUE}
      />
      <StatsDisplay stats={textStats} showReadingTime={SHOW_READING_TIME} />
      {/* CharacterCounter invoked in StatsDisplay */}
    </div>
  )
}

export default App
