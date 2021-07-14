const { Telegraf } = require('telegraf')

// console.log(process.env.TELEGRAM_TOKEN);
if(process.env.TELEGRAM_TOKEN){
    console.log('token found');
}
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

module.exports = async function (req, res) {
	try {
    const baseUrl = `${req.protocol}://${req.headers.host}`;
		res.send('OK: ' +  baseUrl);
    console.log(baseUrl);
// 		res.statusCode = 200
// 		res.end('')
	} catch (e) {
		res.statusCode = 500
		res.setHeader('Content-Type', 'text/html')
		res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
		console.error(e.message)
	}
};

// bot.command('start', ctx => {
    //     console.log(ctx.from)
    //     bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
        //     })
        // });
        
        // bot.launch();
        
        
        // console.log(bot);
//         bot.start((ctx) => ctx.reply('Welcome'))
//         bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))
// bot.on('text', (ctx) => ctx.replyWithHTML('<b>Hello</b>'))

// // Start webhook directly
// // bot.startWebhook('/secret-path', null, 3000)
// // bot.telegram.setWebhook('https://---.localtunnel.me/secret-path')

// // Start webhook via launch method (preferred)
// bot.launch({
//   webhook: {
//     host: 'https://strato-portal-bot.vercel.app',
// //     port: 443
//   }
// })

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
//         // bot.help((ctx) => ctx.reply('Send me a sticker'))
//         // bot.on('sticker', (ctx) => ctx.reply('👍'))
//         // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
//         // // bot.startWebhook('/secret-path', null, 5000)
//         // // bot.launch()

//         // bot.launch({
//         //     webhook: {
//         //       domain: 'https://strato-portal-bot.vercel.app',
//         //       port: 8080
//         //     }
//         //   })
          
        
        // Enable graceful stop
        // process.once('SIGINT', () => bot.stop('SIGINT'))
        // process.once('SIGTERM', () => bot.stop('SIGTERM'))
        
        
// bot.context.db = {
//     getScores: () => { return 42 }
//   }
  
//   bot.on('text', (ctx) => {
//       console.log(ctx)
//     const scores = ctx.db.getScores(ctx.message.from.username)
//     return ctx.reply(`${ctx.message.from.username}: ${scores}`)
//   })
  
//   bot.launch()
