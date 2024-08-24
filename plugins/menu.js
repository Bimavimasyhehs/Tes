let handler = async (m, { conn }) => {
  try {
      function formatUptime(uptimeInSeconds) {
    const hours = Math.floor(uptimeInSeconds / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeInSeconds % 60);

    return `${hours}:${minutes}:${seconds}`;
}
const uptimeInSeconds = process.uptime();
const quotes = ['The True Power Of Sigma Skibid', 'BIMZ Never Die!', 'Merusak Lebih Menyenangkan', 'Hidup Itu Berat', 'Ngoding? Tidak Aku Hanya Copy Paste', 'Woy Ini Script Mahal', 'Hanya Yang Terbaik Yang Akan Menang', 'Bacot Bocah Bened Skillnya Itu Itu Aja', 'PUBG, ML, FF, HOK, PB, BS Edyan', 'Semakin Dewasa Semakin Gede Jir', 'Jika Punyamu Kecil Berarti Untuk Anak Kecil', 'Hey Bung Umur Hanyalah Angka', 'No Wife No Problem, Wifi Mati Banting Modem']
const formattedUptime = formatUptime(uptimeInSeconds);

    const m2 = ` ◦  BIMZ
≡ *ඞ* Random Info? Baca Body Thumbnail Wak

\`\`\`- Uptime: ${formattedUptime}\`\`\`
\`| .ipinfo |\` ɢᴇᴛᴛɪɴɢ ɪɴꜰᴏ ꜰʀᴏᴍ ɪᴘ
\`| .methods |\` ʟɪꜱᴛ ᴍᴇᴛʜᴏᴅꜱ
\`| .ddos |\` ɪɴᴛɪ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ 😹
\`| .proxy |\` ᴘʀᴏxʏ ꜱᴄʀᴀᴘᴇʀ
\`| .ua |\` ᴜᴀ ɢᴇɴᴇʀᴀᴛᴏʀ
\`| .pkudet |\` ᴘᴛᴇʀᴏᴅ ᴀᴄᴄ ʀᴇᴍᴏᴠᴇʀ
\`| .kill_ssh |\` ᴠᴘꜱ ᴋɪʟʟᴇʀ
\`| .gyat |\` ꜱɪɢᴍᴀ ᴍᴇᴡɪɴɢ ᴘᴏᴡᴇʀ?
\`| .vccgen |\` ꜰᴀᴋᴇ ᴄʀᴇᴅɪᴛ ᴄᴀʀᴅ ɢᴇɴ
\`| .enc |\` ᴇɴᴄʏᴘᴛ ʏᴏᴜʀ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ
\`| .binary |\` ʙɪɴᴀʀʏ ᴄᴏᴅᴇ ᴄᴏɴᴠᴇʀᴛ
\`| .mcbot |\` ᴍᴄ ʙᴏᴛ ꜰʟᴏᴏᴅᴇʀ
\`\`\`-------------------\`\`\``;

conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `BIMZ`,
body: quotes[Math.floor(Math.random() * quotes.length)],
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
