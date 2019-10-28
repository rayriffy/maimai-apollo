import { RESTDataSource } from 'apollo-datasource-rest'

class MaimaiAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = ''
	}
}

export default MaimaiAPI
