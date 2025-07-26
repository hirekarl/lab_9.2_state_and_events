// https://www.prsa.org/article/how-to-determine-average-reading-time
const AVERAGE_WORDS_PER_MINUTE: number = 200

export function countCharacters(text: string): number {
  return text.length
}

export function countWords(text: string): number {
  return text.split(" ").filter((word) => word && word.trim() !== "").length
}

export function calculateReadingTime(wordCount: number): number {
  return wordCount / AVERAGE_WORDS_PER_MINUTE
}

export function numberToTimeString(time: number): string {
  const minutes = Math.floor(time)
  const seconds = Math.floor((time - minutes) * 60)

  return `${minutes}:${String(seconds).padStart(2, "0")}`
}
