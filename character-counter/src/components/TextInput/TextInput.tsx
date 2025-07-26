import { type ReactNode } from "react"
import { type TextInputProps } from "../../types"

export default function TextInput({
  onTextChange,
  placeholder,
  initialValue,
}: TextInputProps): ReactNode {
  const testText = "This is some text."

  return (
    <div>
      <h2>TextInput</h2>
      <ul>
        {placeholder && <li>placeholder: {placeholder}</li>}
        {initialValue && <li>initialValue: {initialValue}</li>}
      </ul>
      <textarea onChange={() => onTextChange(testText)}></textarea>
    </div>
  )
}
