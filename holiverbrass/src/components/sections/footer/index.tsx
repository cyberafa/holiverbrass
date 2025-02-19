import FooterMain from "./partials/main"
import FooterAux from "./partials/footer-aux"
import { FooterTypes } from "./types"

function FooterApp({ navigation, socials, contact }: FooterTypes): JSX.Element {
  return (
    <footer className="footer">
      <FooterMain navigation={navigation} />
      <FooterAux socials={socials} contact={contact} />
    </footer>
  )
}

export default FooterApp
