import config from "./config.js";

export const getCodes = () => {
	let codes = []
	for (let i = config.min; i < config.max + 1; i++) {
		let ans = String(i).padStart(config.zeros, '0')
		const code = config.template.replaceAll('<X>', ans)
		codes.push(code)
	}
	return codes
}

