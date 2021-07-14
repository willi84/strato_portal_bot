const { Telegraf } = require('telegraf')

// console.log(process.env.TELEGRAM_TOKEN);
if(process.env.TELEGRAM_TOKEN){
    console.log('token found');
}
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// bot.command('start', ctx => {
    //     console.log(ctx.from)
    //     bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
        //     })
        // });
        
        // bot.launch();
        
        
        // console.log(bot);
        bot.start((ctx) => ctx.reply('Welcome'))
        bot.help((ctx) => ctx.reply('Send me a sticker'))
        bot.on('sticker', (ctx) => ctx.reply('👍'))
        bot.hears('hi', (ctx) => ctx.reply('Hey there'))
        // bot.startWebhook('/secret-path', null, 5000)
        // bot.launch()

        bot.launch({
            webhook: {
              domain: 'https://strato-portal-bot.vercel.app',
              port: 8080
            }
          })
          
        
        // Enable graceful stop
        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
        
        
// bot.context.db = {
//     getScores: () => { return 42 }
//   }
  
//   bot.on('text', (ctx) => {
//       console.log(ctx)
//     const scores = ctx.db.getScores(ctx.message.from.username)
//     return ctx.reply(`${ctx.message.from.username}: ${scores}`)
//   })
  
//   bot.launch()
