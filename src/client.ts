import axios from "axios";
import { Query } from "./query";
import { Word } from "./word";

export class Client {
    constructor(private url: string) {}

    async get(query: Query): Promise<Word[]> {
        if(!this.isValidQuery(query)) {
            throw new Error('invalid query provided')
        }
        const url = this.createURL(query)
        const result = await axios.get(url)
        const response = result.data
        if (!response.success) {
            throw new Error(response.message)
        }
        return result.data.results
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