import { getCodes } from './generator.js'
import { getConfig } from './config-finder.js'
import {writeToCvs} from './cvs-creator.js'
import {Logger} from './logger.js'

const config = getConfig()

Logger.print(`🔄 Start processing...`)
Logger.print(`🍒 template: ${config.template}`)
Logger.print(`🚠 range: ${config.min} — ${config.max}`)

const codes = getCodes(config)
const cvsWriterOptions = { filename: config.filename }
writeToCvs(codes, cvsWriterOptions)



