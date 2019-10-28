import { IResolvers } from 'apollo-server-express'

const resolver: IResolvers = {
  Query: {
		getCharts: (_, __, { dataSources }) => {
      return dataSources.maimaiAPI.getCharts()
    },
  },
}

export default resolver
