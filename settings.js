const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=fNFxwDIB#_cyWufYB4miw2LaIQyaQO49RvAaRcpLp2hjLUajz-18' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '0710701946' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌👨‍💻 MR SASIYA BOT TEAM 👨‍💻': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
PAIR: 'https://vajirasession-430ab1324465.herokuapp.com/code?number=',       
ALIVE:  process.env.ALIVE  || '> SASIYA BOT MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
