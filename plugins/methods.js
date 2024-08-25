const { join } = require('path');
const fs = require('fs');

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    const thumb = 'https://telegra.ph/file/b27e064ee5e69705b81fd.jpg'
    const m2 = `       ≡ *𒄆DDoS Method Layer 7*🪽
┌─⊷
\`| -Tls\`
\`| -Mix\`
\`| -Https\`
\`| -Ninja\`
└───────────
      ≡ *𒄆DDoS Method Layer 4*🪽
┌─⊷
\`Available Only On PermenMisc V3 Rework\`
└───────────`;


conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `PermenMDXDDoS`,
body: `Cheapest DDoS Script By PermenMD`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/a60bd062bbd8c6e5377d2.png`,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['methods'];
handler.tags = ['main'];
handler.command = /^(methods)$/i;

module.exports = handler
