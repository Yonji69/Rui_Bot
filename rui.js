const Discord = require("discord.js")
require("dotenv").config()
const TOKEN="OTQwOTkwODU1NzczMzE1MTUy.YgPcBg.-UopVfxtXvGYo0swN8uoSUuw77E"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready" , ()=> {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message)=> {
    if(message.content == "Thank You"){
        message.reply("Your Welcome Wussy Boy!!")
    }
})
client.login(process.env.TOKEN)