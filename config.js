const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6382938846";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_03_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFeUMxSktnbHZDOFpZL0g3UXlhdm1ObnpwREp4ZHJPU1d6Um5seVFIaEFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTQ4ODExMjYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EzMTFGNURENUI5Qzk0MDMzNzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTI2MjA4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJvOXJkc2x4VHZxd3J3SThrMWJEbEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU2Nzg4MmQtYTgxNy00ZGY4LWE1MzgtYmQ5N2I4NDg3MzEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDE2NCxcbiAgICAgIDE4MCxcbiAgICAgIDI0NyxcbiAgICAgIDIxOCxcbiAgICAgIDE1MCxcbiAgICAgIDE4MyxcbiAgICAgIDIzMyxcbiAgICAgIDE0MyxcbiAgICAgIDYwLFxuICAgICAgMjQ0LFxuICAgICAgMzUsXG4gICAgICA3NSxcbiAgICAgIDQ2LFxuICAgICAgNjcsXG4gICAgICAxMjMsXG4gICAgICAxMjAsXG4gICAgICAxMTksXG4gICAgICAxLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMzAsXG4gICAgICAxNjEsXG4gICAgICAxOTUsXG4gICAgICAxMDYsXG4gICAgICAxMzUsXG4gICAgICA3OCxcbiAgICAgIDg5LFxuICAgICAgMjM4LFxuICAgICAgMjI5LFxuICAgICAgOTUsXG4gICAgICAxMjgsXG4gICAgICAyMjQsXG4gICAgICAxOTIsXG4gICAgICAyMDAsXG4gICAgICAxNTYsXG4gICAgICAyMTQsXG4gICAgICAxNjEsXG4gICAgICA0OCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZXV0RKREpKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk0ODgxMTI2Mjc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgxOTA2MzY4Nzk5NjY6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTmF2YVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TQzVMSUZFTGVSMzdNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiKzd1OTBWYWdLQU1Fb3dValJpM2pLaDFlc0tqMFhuTnlDRytuYTlUeExqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtTmhCQ2Y0ZXloRVZUWWF0eVR0R05ubnBBVElTWDZjZTRwRVl2R2IxS1Z1a1V2a3hXZ0JDNUF0K0dNSG05K0lQWVdyZXBFdTU5SGtDaHFTd1hOT3FEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOaThmY1E4cUJFOVJUY1UvbmRHMm14Tm9Ob21xbkhKVUJ5TTU4a0F6YllheVVQbnB4M1kxd3Y0RmpWWXViMExHcTJtakkwdUw2MlFoNzY4eFhRMjhoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk0ODgxMTI2Mjc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTI2MjAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDFSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMVIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQVTRCTER6eXVlR2sxYnpvRDJEV0FXOWI5a2U2NWYzSHZYQ0lsVnVVbWVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDg2NzM2MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzc1MjY4MjgyMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
