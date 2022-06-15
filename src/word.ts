import { Language } from './language'
import { Mutations } from './mutations'
import { WordType } from './word-type'

export interface Word {
  id: number
  normalForm: string
  lang: Language
  confirmed: boolean
  type: WordType
  mutations?: Mutations
}
