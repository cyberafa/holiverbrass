import { UiIcon } from "@ui"
import { FooterAuxContactTypes } from "./types"
import "./style.scss"

function FooterAuxContact({ contact }: FooterAuxContactTypes): JSX.Element {
  return (
    <div className="footer-aux-contact">
      {contact.map((contact) => (
        <div key={contact.icon} className="footer-aux-contact-item">
          <UiIcon name={contact.icon} />
          <span className="footer-aux-contact-item-text">{contact.text}</span>
        </div>
      ))}
    </div>
  )
}

export default FooterAuxContact
