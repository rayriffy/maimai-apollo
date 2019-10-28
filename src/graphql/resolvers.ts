import { IResolvers } from 'apollo-server-express'

const resolver: IResolvers = {
  Query: {
		getCharts: (_, __, { dataSources }) => {
      return dataSources.MaimaiAPI.getCharts()
    },
  },
}

export default resolver
