import { Link as RouterLink } from "react-router-dom"
import { LinkTypes } from "./types"
import "./style.scss"
import { Route } from "react-router"

function UiLink({ props, children, className }: LinkTypes): JSX.Element {
  function LinkComponent() {
    const linkClass = ["ui-link"]

    if (className) {
      linkClass.unshift(className)
    }

    if (props?.to) {
      return (
        <RouterLink to={`dist/` + props.to} className={linkClass.join(" ")}>
          {children}
        </RouterLink>
      )
    } else
      return (
        <a href={props?.href} className={linkClass.join(" ")} target="_blank">
          {children}
        </a>
      )
  }

  return <LinkComponent />
}

export default UiLink
