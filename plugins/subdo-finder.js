const axios = require('axios');

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply(`Nyari Apaan Jir?
.subdo-finder domain.com
Example: .subdo-finder starsx.tech`);
    return;
  }

  const nama = text;
  try {
    let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${nama}`);
    let responseData = response.data.data.map((data, index) => {
      return `${data}`;
}).join('\n');

    conn.sendMessage(m.chat, { contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: global.title,
        body: 'Massive Scraper',
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: global.banner,
        sourceUrl: ``
      }
    }, text: `\`Subdomain Finder\`
${responseData}`}, {quoted: m});

  } catch (e) {
    conn.reply(m.chat, 'Error', m);
    throw e;
  }
};

handler.help = ['subdo-finder'];
handler.tags = ['main'];
handler.command = /^(subdo-finder)$/i;
module.exports = handler;
