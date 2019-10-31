import _ from 'lodash'

import { IResolvers } from 'apollo-server-express'

const resolver: IResolvers = {
  Query: {
		getCharts: async(parent, args, context, info) => {
      const raw = await context.dataSources.MaimaiAPI.getCharts()
      const res = _.filter(raw, args.filter)

      return res
    },
  },
}

export default resolver
