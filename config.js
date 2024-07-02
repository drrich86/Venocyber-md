//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "richardrugangila86@gmail.com";
global.location = "Arusha,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://drrich:Dr.Rich@8600@cluster0.nzuiaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255627786886";
global.sudo = process.env.SUDO || "255627786886";
global.owner = process.env.OWNER_NUMBER || "255744822228";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255627786886";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "255627786886";
global.read_status_from = process.env.READ_STATUS_FROM || "255627786886";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUw2eGZab2ZQL3l5eUpYZW1BUC9RRkJlMkhycExoS0NvQjc1Y29mdzhsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzNjMnNPMFRWSy9HK2l2UFJkOURZUnZIMnJNblA5SndoN0FlVjhFOThqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTW1CZ1BpSWErdFVXbzg2UDlzK2N3M25SeXlhRU9SOTFVNk1YY1NiT0ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNWFczVHZKQjNUd0daNlFtRTg2M25xRDFtTkk0ZVhDTmdBeU9WNlEzekJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOdm1iZnpQb2NhdzM4dWc4cGYybU03UzNyaGw4UEpzMmVZdzN4R1M3azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE0bFRxdGg0VysyN3IrcWo2YzhRbCtPU2lHakcyQ083SFluV01CTEgxQ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1NbC9TYWtTOFpIWFR1QnY2QUtNNDlicmVoMjRwUC94dUZPb1BzcjEzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVFZenlOWlNHMXk2a0xnZk4wa1YrUUVHQnoyeW5KNnJhbjdRUFk3bzdtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUzMHY4V2p6QkxhMm9tSGFCN2lUNHNTWTJMeitpbkRaWXpjWkcvWW91VDJVUVhPdnhRL291TmdqWk8rbEhYVzFHcCtYVVF5Wlc3TnQwek41SVgwSmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6InhEZlUwZjN2ejJ0ckN6VkgwdmxNN3VjQmFvMGJ2andLb29nVk1KS1ZXbnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjYtQTNDLUdVU0txdDJVejVwY0VKZkEiLCJwaG9uZUlkIjoiZGZmNTlmYzctZTM5Zi00OWYzLWI1ODYtYzEwYWQ1NjQ2ZGI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4xZVhocVhlMGNzaDY3YUJWK2d2QzY0NzlKUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWnkyaTZIZGxFNXZENUZtd2NadlpvSE1lWEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjhWQjRSU1EiLCJtZSI6eyJpZCI6IjI1NTYyNzc4Njg4Njo3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQMzlrY2NIRU5tL2o3UUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEN2diQktIVTArbElWSHBESWVWM3BIYURJeDdrR3BtQzNLS2pPSG1MTFZBPSIsImFjY291bnRTaWduYXR1cmUiOiJKT09uT2I4Z3NXcmNHMGNIOFVWaWI0N3IwM1ZKV3pxNUV6cDFaU1FMUThjdnB2TjlCMEJMZ3k1c2hiOFRxcG1hK1FHdWl0eGtVLzZnZHY2ZVlNQkdDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWxwdXRUM2RXNEh5Ti82c2xUc2RyVjJabXlRMW1KZFg3dzJnQ1JORHpsYjVKZmFGTHZ3UFB1bXNmZHprV2RwM0hjcThSTDlwSGltTHF5VVhNSU5saXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2Mjc3ODY4ODY6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRKzRHd1NoMU5QcFNGUjZReUhsZDZSMmd5TWU1QnFaZ3R5aW96aDVpeTFRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTE4NTY2fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝔻𝒓. 𝐑ⅈ𝐜𝒉_Bot👻 Proudly made in Tanzania",
  author: process.env.PACK_AUTHER || "Richard James",
  packname: process.env.PACK_NAME || "༼⁠ ⁠つ⁠ ⁠◕⁠‿⁠◕⁠ ⁠༽⁠つ✨",
  botname: process.env.BOT_NAME || "𝔻𝒓. 𝐑ⅈ𝐜𝒉_Bot👻",
  ownername: process.env.OWNER_NAME || "𝔻𝒓. 𝐑ⅈ𝐜𝒉💉",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "𝔻𝒓. 𝐑ⅈ𝐜𝒉-MD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
