const numowner = '632'
global.namebot = 'BIMZ'
global.title = 'BIMZ'
// Thumbnail Logo Bot
global.banner = 'https://telegra.ph/file/5edaf35eb9ea2c9b4d6f5.png'
global.attacking = 'https://telegra.ph/file/5edaf35eb9ea2c9b4d6f5.png'
global.tracking = 'https://telegra.ph/file/5edaf35eb9ea2c9b4d6f5.png'
global.brutall = 'https://telegra.ph/file/5edaf35eb9ea2c9b4d6f5.png'
global.standby = 'https://telegra.ph/file/5edaf35eb9ea2c9b4d6f5.png'
// kebutuhan cpanel
global.apikey = 'ptla mu'
global.linkPanel = 'isi link panel'
global.egg = '15'
global.loc = '1'

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
