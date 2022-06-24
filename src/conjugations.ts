export interface Conjugations {
  conditional: ConjugationList | string[]
  future: ConjugationList | string[]
  pluperfect: ConjugationList | string[]
  imperative: ConjugationList | string[]
  preterite: ConjugationList | string[]
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
