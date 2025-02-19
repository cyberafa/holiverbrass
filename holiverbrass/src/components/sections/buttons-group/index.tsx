import { UiButton, UiContainer } from "@ui"
import { ButtonsGroupTypes } from "./types"
import "./style.scss"

function ButtonsGroupApp({ buttons }: ButtonsGroupTypes) {
  return (
    <section className="button-group">
      <UiContainer>
        {buttons.map((button) => (
          <UiButton key={button.label} button={button} />
        ))}
      </UiContainer>
    </section>
  )
}

export default ButtonsGroupApp
