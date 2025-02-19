import logo from "@images/footer-logo.png"
import footerLogo from "@images/footer-logo.png"

function BrandLogo(footer: boolean) {
  if (footer) {
    return footerLogo
  }
  return logo
}

export default BrandLogo
