export interface Conjugations {
  conditional: ConjugationList
  future: ConjugationList
  pluperfect: ConjugationList
  imperative: ConjugationList
  preterite: ConjugationList
}

export interface ConjugationList {
  singFirst: string[]
  singSecond: string[]
  singThird: string[]
  plurFirst: string[]
  plurSecond: string[]
  plurThird: string[]
}
