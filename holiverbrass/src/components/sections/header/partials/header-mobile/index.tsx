import { useState } from "react"
import MenuIcon from "./menu-icon"
import Sidebar from "./sidebar"
import { HeaderMobileTypes } from "./types"
import "./style.scss"

function HeaderMobile({ navigation }: HeaderMobileTypes): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  const headerMobileClass = `header-mobile${isOpen ? " -open" : ""}`

  return (
    <div className={headerMobileClass}>
      <MenuIcon click={toggleSidebar} />
      {isOpen && <Sidebar navigation={navigation} />}
    </div>
  )
}

export default HeaderMobile
