import { Client } from '../src/client'
import { Language } from '../src/language'
import { Query } from '../src/query'

describe('Client', () => {
    describe('URL creation', () => {
        let client: Client
        beforeEach(() => {
            client = new Client('example.com')
        })
        it('will create a URL when provided a query with lang and word', () => {
            const query: Query = {
                lang: Language.Welsh,
                word: 'nabod',
                search: false
            }
            const expected = 'example.com/api/dictionary?lang=cy&word=nabod&search=false'
            const result = client.createURL(query)
            expect(result).toEqual(expected)
        })
    })
})