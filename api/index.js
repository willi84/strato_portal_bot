process.env.NTBA_FIX_319 = 'test';
const { mount, reply } = require('micro-bot')
module.exports = mount('sticker', reply('👍'))
