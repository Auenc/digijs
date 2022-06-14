import { WordType } from './word-type'

export interface Word {
  id: number
  normalForm: string
  lang: string
  confirmed: boolean
  type: WordType
}
