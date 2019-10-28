import _ from 'lodash'

import { RESTDataSource } from 'apollo-datasource-rest'

interface ISong {
	genre: string
	name: {
		en: string
		jp: string
	}
	artist: {
		en: string
		jp: string
	}
	image_url: string
	version: string
	bpm: number
	level: {
		easy: number
		basic: number
		advanced: number
		expert: number
		master: number
		remaster: number | null
	}
	listen: {
		youtube: string
		niconico: string | null
	}
	regionlocked: boolean
}

interface IMaimai {
	[index: number]: ISong[]
}

class MaimaiAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'https://raw.githubusercontent.com/rayriffy/maimai-json/master'
	}

	private transformer(raw: IMaimai) {
		return Object.keys(raw).flatMap(key => {
			return _.get(raw, key).map((o: ISong) => ({...o, genre: key}))
		})
	}

	public async getCharts() {
		const res = await this.get('maimai.json')

		return this.transformer(JSON.parse(res))
	}
}

export default MaimaiAPI
