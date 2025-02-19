import { UiIcon, UiLink } from "@ui"
import { FooterAuxSocialsTypes } from "./types"
import "./style.scss"

function FooterAuxSocials({ socials }: FooterAuxSocialsTypes): JSX.Element {
  return (
    <div className="footer-aux-socials">
      {socials.map((icons) => (
        <UiLink props={{ href: icons.link }}>
          <UiIcon key={icons.logo} brand={icons.brand} name={icons.logo} />
        </UiLink>
      ))}
    </div>
  )
}

export default FooterAuxSocials
