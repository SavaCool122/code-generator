import path from 'node:path'
import {createObjectCsvWriter} from "csv-writer";
import {Logger} from "./logger.js";

const mapCodes = (arr) => {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		const code = arr[i]
		result.push({id: code})
	}
	return result
}

export const writeToCvs = (codes, options) => {
	const data = mapCodes(codes)
	const { filename } = options
	
	const Writer = createObjectCsvWriter({
		path: path.resolve(filename),
		header: ['id'],
	});
	
	Writer.writeRecords(data)
		.then(() => {
			Logger.print('Done ✅')
		});
}
