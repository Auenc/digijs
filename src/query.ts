import { Language } from './language'
import { WordType } from './word-type'

export interface Query {
  word?: string
  id?: number
  type?: WordType
  lang: Language
  search: boolean
}
