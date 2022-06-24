import { Language } from "../src/language"
import { Word } from "../src/word"
import { WordType } from "../src/word-type"

export const SuccessfulWord: Word = {
  mutations: {
    nasal: '',
    init: 'mynd',
    aspirate: '',
    soft: 'fynd',
  },
  translations: [
    {
      br: [
        {
          id: 100008,
          lang: Language.Breton,
          value: 'mont',
        },
      ],
      nn: [
        {
          lang: Language.NorwegianNynorsk,
          value: 'gå',
        },
      ],
      de: [
        {
          id: 14,
          lang: Language.German,
          value: 'gehen',
        },
      ],
      en: [
        {
          lang: Language.English,
          value: 'to go',
        },
      ],
      ga: [
        {
          id: 500011,
          lang: Language.Irish,
          value: 'téigh',
        },
        {
          id: 500302,
          lang: Language.Irish,
          value: 'dul',
        },
        {
          id: 500407,
          lang: Language.Irish,
          value: 'imigh',
        },
      ],
      fr: [
        {
          lang: Language.French,
          value: 'aller',
        },
      ],
      gd: [
        {
          id: 800007,
          lang: Language.ScottishGaelic,
          value: 'rach',
        },
      ],
      es: [
        {
          id: 12,
          lang: Language.Spanish,
          value: 'ir',
        },
      ],
    },
  ],
  normalForm: 'mynd',
  id: 1,
  type: WordType.Verb,
  lang: Language.Welsh,
  confirmed: true,
  conjugations: {
    conditional: {
      singSecond: ['aet'],
      singThird: ['âi'],
      singFirst: ['awn'],
      plurFirst: ['aen'],
      plurSecond: ['aech'],
      plurThird: ['aen'],
    },
    future: {
      singSecond: ['ei'],
      singThird: ['aiff', 'eith'],
      singFirst: ['af'],
      plurFirst: ['awn'],
      plurSecond: ['ewch'],
      plurThird: ['ân'],
    },
    pluperfect: {
      singSecond: ['âsit'],
      singThird: ['âsai'],
      singFirst: ['âswn'],
      plurFirst: ['âsem'],
      plurSecond: ['âsech'],
      plurThird: ['âsent'],
    },
    imperative: {
      singSecond: ['cer'],
      singThird: [],
      singFirst: [],
      plurFirst: [],
      plurSecond: ['cerwch'],
      plurThird: [],
    },
    preterite: {
      singSecond: ['est'],
      singThird: ['aeth'],
      singFirst: ['es'],
      plurFirst: ['aethon'],
      plurSecond: ['aethoch'],
      plurThird: ['aethon'],
    },
  },
}

export const SuccessfulResponse = {
  success: true,
  results: [SuccessfulWord],
}

export const FailedResponse = {
  success: false,
  message: 'something went wrong'
}
