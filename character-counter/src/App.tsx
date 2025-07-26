import type { ReactNode } from "react"
import TextInput from "./components/TextInput/TextInput"
import StatsDisplay from "./components/StatsDisplay/StatsDisplay"
import CharacterCounter from "./components/CharacterCounter/CharacterCounter"
import type { TextStats } from "./types"

function App(): ReactNode {
  // TextInput
  function handleTextChange(text: string): void {
    alert(text)
  }
  const placeholder: string = "placeholder"
  const initialValue: string = "initialValue"

  // StatsDisplay
  const testTextStats: TextStats = {
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  }
  const showReadingTime = true

  // CharacterCounter
  const minWords: number = 1
  const maxWords: number = 100
  const targetReadingTime: number = 10

  return (
    <>
      <h1>Lab 9.2: State &amp; Events</h1>
      <TextInput
        onTextChange={handleTextChange}
        placeholder={placeholder}
        initialValue={initialValue}
      />
      <StatsDisplay stats={testTextStats} showReadingTime={showReadingTime} />
      <CharacterCounter
        minWords={minWords}
        maxWords={maxWords}
        targetReadingTime={targetReadingTime}
      />
    </>
  )
}

export default App
