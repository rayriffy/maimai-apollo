import _ from 'lodash'

import { IResolvers } from 'apollo-server-express'

const resolver: IResolvers = {
  Query: {
		getCharts: async(parent, args, context, info) => {
      const {filter, sort} = args
      const sortOption = {
        order: 'DESC',
        fields: [],
        ...sort,
      }

      const raw = await context.dataSources.MaimaiAPI.getCharts()
      const filteredRaw = _.filter(raw, filter)

      const res = sortOption.order === 'ASC' ? _.sortBy(filteredRaw, sortOption.fields) : sortOption.order === 'DESC' ?  _.sortBy(filteredRaw, sortOption.fields).reverse() : filteredRaw 

      return {
        count: res.length,
        edges: res,
      }
    },
  },
}

export default resolver
