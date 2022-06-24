export interface Conjugations {
  conditional: ConjugationList
  future: ConjugationList
  pluperfect: ConjugationList
  imperative: ConjugationList
  preterite: ConjugationList
  pastParticiple?: string[]
  gerund?: string[]
}

export interface ConjugationList {
  singFirst: string[]
  singSecond: string[]
  singThird: string[]
  plurFirst: string[]
  plurSecond: string[]
  plurThird: string[]
}
