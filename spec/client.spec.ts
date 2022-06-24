import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Client } from '../src/client'
import { Language } from '../src/language'
import { Query } from '../src/query'
import { FailedResponse, SuccessfulResponse, SuccessfulWord } from './client.responses.spec'

describe('Client', () => {
  let client: Client
  let mock: MockAdapter

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })
  beforeEach(() => {
    client = new Client('http://example.com')
  })
  afterEach(() => {
    mock.reset()
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
    it('will return false if no id is set and word is an empty string', () => {
      const query: Query = {
        lang: Language.Welsh,
        word: '',
        search: false,
      }
      const result = client.isValidQuery(query)
      expect(result).toBe(false)
    })
  })
  describe('Get', () => {
    describe('Successful Request', () => {
      it('should return a Word object', async () => {
        const query: Query = {
          lang: Language.Welsh,
          word: 'nabod',
          search: false,
        }

        mock.onGet('http://example.com/api/dictionary?lang=cy&word=nabod&search=false').reply(200, SuccessfulResponse)

        const result = await client.get(query)
        expect(result).toEqual([SuccessfulWord])
      })
    })
    describe('Failed request', () => {
      it('200: should throw an error if the API returns an error', async () => {
        const query: Query = {
          lang: Language.Welsh,
          word: 'nabod',
          search: false,
        }

        mock.onGet('http://example.com/api/dictionary?lang=cy&word=nabod&search=false').reply(200, FailedResponse)

        await expectAsync(client.get(query)).toBeRejectedWithError(FailedResponse.message)
      })
    })
  })
})
