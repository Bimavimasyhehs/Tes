let handler = async (m, { conn }) => {
  try {
    const thumb = ''
    const m2 = `> </> BIMZ

-------------------
\`| .ipinfo\`
\`| .macinfo\`
\`| .methods\`
\`| .ddos\`
\`| .proxy\`
\`| .ua\`
-------------------

*BIMZ*
`;

conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `PermenMDXDDoS`,
body: `Cheapest DDoS Bot By PermenMD`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: ``,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['misc'];
handler.tags = ['main'];
handler.command = /^(misc)$/i;
module.exports = handler
