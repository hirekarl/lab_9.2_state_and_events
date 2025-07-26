import { type ReactNode } from "react"
import { type TextInputProps } from "../../types"

const TEXTAREA_ROWS: number = 10

export default function TextInput({
  onTextChange,
  placeholder,
  initialValue,
}: TextInputProps): ReactNode {
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onTextChange(event.target.value)
  }

  return (
    <div className="mb-3">
      <textarea
        rows={TEXTAREA_ROWS}
        className="form-control"
        placeholder={placeholder || ""}
        onChange={handleChange}>
        {initialValue || ""}
      </textarea>
    </div>
  )
}
