type SocialsSettings = {
  title: string
}

type SocialsIcons = {
  brand: boolean
  logo: string
}

export type SocialsTypes = {
  settings: SocialsSettings
  icons: Array<SocialsIcons>
}
