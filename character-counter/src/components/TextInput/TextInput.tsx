import { type ReactNode } from "react"
import { type TextInputProps } from "../../types"
import {
  TEXTINPUT_TEXTAREA_MAX_LENGTH,
  TEXTINPUT_TEXTAREA_ROWS,
} from "../../constants"

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
        maxLength={TEXTINPUT_TEXTAREA_MAX_LENGTH}
        rows={TEXTINPUT_TEXTAREA_ROWS}
        className="form-control"
        placeholder={placeholder || ""}
        onChange={handleChange}>
        {initialValue || ""}
      </textarea>
    </div>
  )
}
