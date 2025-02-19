import { UiContainer, UiIcon } from "@ui"
import { SocialsTypes } from "./types"
import "./style.scss"

function SocialsApp({ settings, icons }: SocialsTypes): JSX.Element {
  return (
    <section className="socials">
      <UiContainer>
        <h3 className="socials-title">{settings.title}</h3>
        <div className="socials-icons">
          {icons.map((icon) => (
            <UiIcon key={icon.logo} brand={icon.brand} name={icon.logo} />
          ))}
        </div>
      </UiContainer>
    </section>
  )
}

export default SocialsApp
