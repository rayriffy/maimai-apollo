import { gql } from 'apollo-server-express'

const schema = gql`
  type Query {
    getCharts: [Chart]
  }

  type Chart @cacheControl(maxAge: 3600){
    genre: string
    name: [LocaleText]
    artist: [LocaleText]
    image_url: string
    version: string
    bpm: number
    level: [ChartLevel]
    listen: [ChartListen]
    regionlocked: Boolean
  }

  type LocaleText @cacheControl(maxAge: 3600){
    en: String
    jp: String
  }

  type ChartLevel @cacheControl(maxAge: 3600){
    easy: number
    basic: number
    advanced: number
    expert: number
    master: number
    remaster: String!
  }

  type ChartListen @cacheControl(maxAge: 3600){
    youtube: String
    niconico: String!
  }
`

export default schema
