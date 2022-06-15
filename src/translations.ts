import { Language } from "./language"

export interface Translations {
    cy?: Translation[]
    br?: Translation[]
    kw?: Translation[]
    dw?: Translation[]
    ga?: Translation[]
    gd?: Translation[]
    es?: Translation[]
}

export interface Translation {
    id: number
    lang: Language
    value: string
    version?: string
}