const { Telegraf } = require('telegraf')

// console.log(process.env.TELEGRAM_TOKEN);
if(process.env.TELEGRAM_TOKEN){
    console.log('token found');
}
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to vercel'));
 bot.hears('hi', (ctx) => ctx.reply('Heddy there: ' + Object.keys(ctx)))
// bot.startWebhook('/api/basic', null, 8080)
// bot.telegram.setWebhook('https://---.localtunnel.me/secret-path')
// bot.launch();
bot.launch({
  webhook: {
        host: '0.0.0.0',
        // $BOT_DOMAIN or $NOW_URL
        port: process.env.PORT || 3000,
        // domain: process.env.domain,
    // host: 'portaldev102.berlin.strato.de',
  }
})
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
