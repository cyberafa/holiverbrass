import { useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { HeaderApp, FooterApp, BannerCarouselApp } from "@sections"
import routes from "./routes"
import {
  DataNavigation,
  SectionBannerCarousel,
  DataLinks,
  DataContact,
} from "@schemas"
import "@app.scss"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {}, [pathname])
  window.scrollTo({ top: 400, behavior: "smooth" })
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HeaderApp navigation={DataNavigation} />
      <BannerCarouselApp
        settings={SectionBannerCarousel.settings}
        slides={SectionBannerCarousel.slides}
      />
      <Routes>
        <Route
          path={routes.home.path}
          key={routes.home.path}
          element={<routes.home.component />}
        />
        <Route
          path={routes.about.path}
          key={routes.about.path}
          element={<routes.about.component />}
        />
        <Route
          path={routes.contact.path}
          key={routes.contact.path}
          element={<routes.contact.component />}
        />
        <Route
          path={routes.products.path}
          key={routes.products.path}
          element={<routes.products.component />}
        />
      </Routes>
      <FooterApp
        navigation={DataNavigation}
        socials={DataLinks}
        contact={DataContact}
      />
    </Router>
  )
}

export default App
