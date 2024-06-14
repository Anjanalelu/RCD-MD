//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94760105256";
global.owner = process.env.OWNER_NUMBER || "94760105256";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY08yYUg3bzFvV21HbTcrNkxtOTdiYmJsNHlpQUJoN01wNld5ZVI5dzJXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXFESzJFdVJGUWpxQWpNVzZvd1gycTVSLzZadVhJMUpSZzhvQ3dJRjVYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ2Juck9xZDgvcGtiNXdGUitwMldoSytvMC9nVFVXZ3BmSkFLWWp2WWxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3dHhHdDJrU2tuekozc1p2dU91NXNGMmdoeEpHWjVaTHR0M0N3ZGVwc3lrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCbzdtcHRLMHEzNzJpNmVoazdDQStpOXd3NHdReStqaitPTEVHQnUvbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJWOG4wd1lPOXpSY2hpSFd3SFBmRWNCa0cyOVBkUWZVZ0NNV0U0K3VYaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hwYnFyN1ZyNmJSYTg2MGYzbDRZV1NSZk9jR2VTRjdianMrUmZUcnYzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnZKdG90SUVhMHpWTHo5RUEyU0J4ajBNM0FTeTZNL0ZlM3lqNkhKVWIwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc2QWluZzNQT0hjZ3d1VDBWS0dTZm5iYWxmb08vMnQrcFVodHQ2SUhPOFpKUG9CczJxL2ZhVzdBK05idHNjS3B3MzhwMUFLdnR5WUcxUzlvVGxkOGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6Ii9RZnA1NGlOWE9rZlNSTmh6UTVHMUlLVHA4Rko3ZzQzTi9iN1FvOE0zdWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRIdzlfbFVZU3ptU3cyZlM0a2Qyd0EiLCJwaG9uZUlkIjoiM2I2YWQ4NTYtMTY3Mi00NjExLWIyODEtYmQ0ZDlmNTQ3MzdmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLT1Z5TS9aUG1XcWRIb2lMd09sc2tiOHVPaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaUXBKZEYrNUcyUVNKb0NSZGhUc3pxMjg1MVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDlCWDZRVkEiLCJtZSI6eyJpZCI6Ijk0NzYwMTA1MjU2OjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0gMm04bSK4bSAybThtIA60LLQstC914AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rZTNab0RFTjJxcXJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxuMXJqOW5USHhiOWk1NDNjQXk4ZmZIVUtMVHcydjVQeDZwTVoycXd4UTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitTRG1KaGlGSFVPTUNDWDZZQjYwcW9DK0pxUjVDREp4VllWbkM4UXJOeVVKOFBpbjdrUDFEU1BwOUk0RzdpMTZ4K2gyTjdJVlc3ZzRLWHgxUktvV0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFTUJyblp1RUM0MTA1VkpZUWJ5dXRqWUR5T1ZRcE1Wbk5sRGJnNzlZL2FYUWFRWVlLYzc2cjJIM1BXL3lGNlRJT2ZpL0Z2SDhpZGswLzNvL1U2dkdoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYwMTA1MjU2OjkxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM1OWE0L1oweDhXL1l1ZU4zQU12SDN4MUNpMDhOcitUOGVxVEdkcXNNVU8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTgyNjEwOTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVA3In0=
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝑲𝑰𝑵𝑮 𝑨𝑵𝑱𝑨𝑵𝑨 𝑴𝑫 ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝑲𝑰𝑵𝑮 𝑨𝑵𝑱𝑨𝑵𝑨 𝑴𝑫 ",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,VIPER ",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-d24ea4fd-1814-4133-b6e4-de028983cbf6",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "lelumanjana ",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
