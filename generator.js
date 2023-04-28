import {Logger} from "./logger.js";

export const getCodes = (config) => {
	let codes = []
	const max = config.max + 1
	const min = config.min
	
	const lengthOfMaxNumber = String(max).length
	const padStartNumber = Math.max(config.zeros, lengthOfMaxNumber)
	
	Logger.print(`📎 zeros length: ${padStartNumber}`)
	
	for (let i = min; i < max; i++) {
		let codeWithZeros = String(i).padStart(padStartNumber, '0')
		const codeInTemplate = config.template.replaceAll(config.placeholder, codeWithZeros)
		codes.push(codeInTemplate)
	}
	return codes
}

