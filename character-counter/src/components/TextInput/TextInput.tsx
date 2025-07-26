import { type ReactNode } from "react"
import { type TextInputProps } from "../../types"

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
        rows={10}
        className="form-control"
        placeholder={placeholder || ""}
        onChange={handleChange}>
        {initialValue || ""}
      </textarea>
    </div>
  )
}
