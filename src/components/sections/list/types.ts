type ListSettings = {
  title?: string
}

type ListItem = {
  text: string
  bold?: boolean
}

export type ListTypes = {
  settings: ListSettings
  list: Array<ListItem>
}
