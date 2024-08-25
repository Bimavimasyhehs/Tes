const numowner = '0857323'


// Ga Perlu Di Ganti
global.owner = [numowner]  
global.mods = [numowner] 
global.prems = [numowner]
global.nameowner = 'BIMZ'
global.numberowner = numowner
global.mail = 'BIMZ@starsx.tech' 
global.maxwarn = '2'

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
