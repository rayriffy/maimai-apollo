import { gql } from 'apollo-server-express'

const schema = gql`
  type Query {
    getCharts: [Chart]
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

  type LocaleText @cacheControl(maxAge: 3600){
    en: String!
    jp: String!
  }

  type ChartLevel @cacheControl(maxAge: 3600){
    easy: String!
    basic: String!
    advanced: String!
    expert: String!
    master: String!
    remaster: String
  }

  type ChartListen @cacheControl(maxAge: 3600){
    youtube: String!
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
`

export default schema
