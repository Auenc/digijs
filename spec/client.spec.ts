import { Client } from '../src/client'
import { Language } from '../src/language'
import { Query } from '../src/query'

describe('Client', () => {
  let client: Client
  beforeEach(() => {
    client = new Client('http://example.com')
  })
  describe('URL creation', () => {
    it('will create a URL when provided a query with lang and word', () => {
      const query: Query = {
        lang: Language.Welsh,
        word: 'nabod',
        search: false,
      }
      const expected =
        'http://example.com/api/dictionary?lang=cy&word=nabod&search=false'
      const result = client.createURL(query)
      expect(result).toEqual(expected)
    })

    it('will create a URL when provided a query with lang and id', () => {
      const query: Query = {
        lang: Language.Welsh,
        id: 1,
        search: false,
      }
      const expected =
        'http://example.com/api/dictionary?lang=cy&id=1&search=false'
      const result = client.createURL(query)
      expect(result).toEqual(expected)
    })
  })
  describe('isValidQuery', () => {
    it('it will return true if the required fields are present', () => {
      const query: Query = {
        lang: Language.Welsh,
        word: 'nabod',
        search: false,
      }
      const result = client.isValidQuery(query)
      expect(result).toBe(true)
    })
    it('will return false if neither id or word is set', () => {
      const query: Query = {
        lang: Language.Welsh,
        search: false,
      }
      const result = client.isValidQuery(query)
      expect(result).toBe(false)
    })
  })
})
