export interface Entry {
  description: string
  id: string
  image: EntryImage
  title: string
  url: EntryUrl
}

interface EntryImage {
  height: string
  img: string
  title: string
  url: string
  width: string
}

interface EntryUrl {
  type: string
  value: string
  defaultText: string
  customText: string
  target: string
  nofollow: string
  locale: string
  customValues: any[]
}

export interface Error {
  error: string[]
}
