// TextInput
export const TEXTINPUT_TEXTAREA_ROWS: number = 10
const HTML_TEXTAREA_MAX_LENGTH: number = 524288 // https://www.dofactory.com/html/input/maxlength
export const TEXTINPUT_TEXTAREA_MAX_LENGTH: number =
  HTML_TEXTAREA_MAX_LENGTH / 2 ** 6

// TextInput props
export const PLACEHOLDER: string = `Start typing your content here... (maximum ${TEXTINPUT_TEXTAREA_MAX_LENGTH.toLocaleString(
  "en-US"
)} characters)`
export const INITIAL_VALUE: string = ""

// StatsDisplay
export const WORDCOUNT_WARNING_THRESHOLD: number = 0.8

// StatsDisplay props
export const SHOW_READING_TIME: boolean = true

// CharacterCounter props
export const MIN_WORDS: number = 1
export const MAX_WORDS: number = 400
export const TARGET_READING_TIME: number = 2 // minutes
