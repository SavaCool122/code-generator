import { getCodes } from './generator.js'
import path from 'node:path'
import { createObjectCsvWriter } from 'csv-writer'

const mapCodes = (arr) => {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		const code = arr[i]
		result.push({id: code})
	}
	return result
}

const codes = mapCodes(getCodes())

const writer = createObjectCsvWriter({
	path: path.resolve('codes.csv'),
	header: [
		'id'
	],
});

writer.writeRecords(codes).then(() => {
	console.log('Done!');
});
