import { Query } from "./query";

export class Client {
    constructor(private url: string) {}

    get(query: Query) {

    }

    createURL(query: Query): string {
        const url = new URL(this.url)
        url.pathname = '/api/dictionary'

        Object.entries(query).forEach(([name, value]) => url.searchParams.set(name, value))

        return url.href
    }

    isValidQuery(query: Query): boolean {
        if(!query.id && !query.word) {
            return false
        }
        return true
    }
}