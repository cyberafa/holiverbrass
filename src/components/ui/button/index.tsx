import { Link as RouterLink } from "react-router-dom"
import { UiIcon, UiTextStyle } from "@ui"
import { ButtonTypes } from "./types"
import "./style.scss"

function UiButton({ button, onClick }: ButtonTypes): JSX.Element {
  function ButtonComponent({ ...attrs }): JSX.Element {
    if (button.to) {
      return <RouterLink to={button.to} {...attrs} />
    }
    if (button.href) {
      return (
        <a
          href={button.href}
          {...attrs}
          download={button.download}
          target="_blank"
        />
      )
    } else return <button {...attrs} />
  }

  const buttonClass = ["ui-button"]

  if (button.sm) {
    buttonClass.push("-sm")
  }

  return (
    <ButtonComponent className={buttonClass.join(" ")} onClick={onClick}>
      {button.image && <img src={button.image} className="ui-button-image" />}
      {button.icon && <UiIcon name={button.icon} />}
      <UiTextStyle style={{ uppercase: button.uppercase }}>
        {button.label}
      </UiTextStyle>
    </ButtonComponent>
  )
}

export default UiButton
