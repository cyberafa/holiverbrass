import React from "react"
import Aside from "./aside"
import { HeaderSidebarTypes } from "./types"

function HeaderSidebar({ navigation }: HeaderSidebarTypes): JSX.Element {
  return (
    <React.Fragment>
      <div className="sidebar-overlay" />
      <Aside navigation={navigation} />
    </React.Fragment>
  )
}

export default HeaderSidebar
