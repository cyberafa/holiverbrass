import { BrandLogo } from "@services"
import { UiLink } from "@ui"
import { CompanyLogoTypes } from "./types"
import "./style.scss"

function UiCompanyLogo({ footer }: CompanyLogoTypes): JSX.Element {
  const companyLogoClass = ["company-logo"]

  return (
    <UiLink props={{ to: "/" }}>
      <img src={BrandLogo(footer!)} className={companyLogoClass.join(" ")} />
    </UiLink>
  )
}

export default UiCompanyLogo
