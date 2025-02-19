import React from "react"
import { TextStyleTypes } from "./types"
import "./style.scss"

function UiTextStyle({ style, children }: TextStyleTypes): JSX.Element {
  const textStyleClass = ["ui-text-style"]

  if (style.uppercase) {
    textStyleClass.push("-uppercase")
  }

  if (style.bold) {
    textStyleClass.push("-bold")
  }

  function TextStyleComponent() {
    if (style.tag) {
      return React.createElement(
        style.tag,
        { className: textStyleClass.join(" ") },
        children
      )
    } else return <span className={textStyleClass.join(" ")}>{children}</span>
  }

  return <TextStyleComponent />
}

export default UiTextStyle
