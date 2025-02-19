export type FooterAuxContact = {
  icon: string
  text: string
}

export type FooterAuxSocials = {
  logo: string
  link?: string
  brand?: boolean
}

export type FooterAuxTypes = {
  socials: Array<FooterAuxSocials>
  contact: Array<FooterAuxContact>
}
