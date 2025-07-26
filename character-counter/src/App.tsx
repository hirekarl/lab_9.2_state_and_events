import { type ReactNode, useState } from "react"
import TextInput from "./components/TextInput/TextInput"
import StatsDisplay from "./components/StatsDisplay/StatsDisplay"
import type { TextStats } from "./types"

import { countCharacters, countWords, calculateReadingTime } from "./utils"

function App(): ReactNode {
  const textStatsInitialValue: TextStats = {
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  }
  const [textStats, setTextStats] = useState(textStatsInitialValue)

  // TextInput
  function updateText(newText: string): void {
    const newTextStats: TextStats = {
      characterCount: countCharacters(newText),
      wordCount: countWords(newText),
      readingTime: calculateReadingTime(countWords(newText)),
    }
    setTextStats(newTextStats)
  }

  const placeholder: string = "Start typing your content here..."
  const initialValue: string = ""

  // StatsDisplay
  const showReadingTime = true

  return (
    <>
      <div className="container">
        <h1 className="my-4">Lab 9.2: State &amp; Events</h1>
        <TextInput
          onTextChange={updateText}
          placeholder={placeholder}
          initialValue={initialValue}
        />
        <StatsDisplay stats={textStats} showReadingTime={showReadingTime} />
      </div>
    </>
  )
}

export default App
