import config from "./config.js";

export const getCodes = () => {
	let codes = []
	for (let i = config.min; i < config.max; i++) {
		const str = "" + i
		const pad = "0".repeat(config.zeros)
		let ans = pad.substring(0, pad.length - str.length) + str
		const code = config.template.replaceAll('<X>', ans)
		codes.push(code)
	}
	return codes
}

