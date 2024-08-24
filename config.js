const numowner = '23514323'
global.apikey = 'ptla u
global.linkPanel = 'isi link panel'
global.egg = '15'
global.loc = '1'

// Ga Perlu Di Ganti
global.owner = [numowner]  
global.mods = [numowner] 
global.prems = [numowner]
global.nameowner = 'BIMZ'
global.numberowner = numowner
global.mail = 'BIMZ' 
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
