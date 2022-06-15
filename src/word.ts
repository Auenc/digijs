import { Conjugations } from './conjugations'
import { Language } from './language'
import { Mutations } from './mutations'
import { Translation, Translations } from './translations'
import { WordType } from './word-type'

export interface Word {
  id: number
  normalForm: string
  lang: Language
  confirmed: boolean
  type: WordType
  mutations?: Mutations
  conjugations?: Conjugations
  translations?: Translations
  related?: Translation
}
