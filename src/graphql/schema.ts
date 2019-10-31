import { gql } from 'apollo-server-express'

const schema = gql`
  type Query {
    getCharts(sort: ChartSort, filter: ChartFilter): [Chart]!
  }

  type Chart @cacheControl(maxAge: 3600){
    genre: ChartGenre!
    name: LocaleText!
    artist: LocaleText!
    image_url: String!
    version: String!
    bpm: Int!
    level: ChartLevel!
    listen: ChartListen!
    regionlocked: Boolean!
  }

  input ChartSort {
    order: SortOrder
    fields: String
  }

  input ChartFilter {
    genre: ChartGenre
    name: LocaleTextFilter
    artist: LocaleTextFilter
    image_url: String
    version: String
    bpm: Int
    level: ChartLevelFilter
    listen: ChartListenFilter
    regionlocked: Boolean
  }

  type LocaleText @cacheControl(maxAge: 3600){
    en: String!
    jp: String!
  }

  input LocaleTextFilter {
    en: String
    jp: String
  }

  type ChartLevel @cacheControl(maxAge: 3600){
    easy: String!
    basic: String!
    advanced: String!
    expert: String!
    master: String!
    remaster: String
  }

  input ChartLevelFilter {
    easy: String
    basic: String
    advanced: String
    expert: String
    master: String
    remaster: String
  }

  type ChartListen @cacheControl(maxAge: 3600){
    youtube: String!
    niconico: String
  }

  input ChartListenFilter {
    youtube: String
    niconico: String
  }

  enum ChartGenre {
    pops
    nico
    toho
    sega
    game
    orig
  }

  enum SortOrder {
    ASC
    DESC
  }
`

export default schema
