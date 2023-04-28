import { parseArgs } from "node:util";

const PARSE_ARGS_OPTIONS = {
	options: {
		placeholder: {
			type: 'string',
			short: "p",
			default: '{x}'
		},
		template: {
			type: "string",
			short: "t",
			default: 'foo-{x}-bar'
		},
		range: {
			type: "string",
			short: "r",
			default: '0-5000'
		},
		zeros: {
			type: "string",
			short: "z",
			default: '4'
		},
		filename: {
			type: "string",
			short: "n",
			default: 'codes.csv'
		}
	},
	strict: false,
}



export const getConfig = () => {
	const { values } = parseArgs(PARSE_ARGS_OPTIONS);
	const { template, filename, range, placeholder } = values
	const zeros = Number(values.zeros)
	const [min, max] = range.split('-').map(Number)
	
	return {
		template,
		placeholder,
		min,
		max,
		zeros,
		filename
	}
}