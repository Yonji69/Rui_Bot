const Discord = require("discord.js")
require("dotenv").config()
const TOKEN="OTQwOTkwODU1NzczMzE1MTUy.YgPcBg.lD_qzxi_ewtXltO0h-TLPio0BTY".env()

const generateImage= require("./generateImage")
const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

client.on("messageCreate", (message)=> {
    if(message.content == "Hey"){
        message.reply("Hi its Me Rui")
    }
})
const welcomeChannelId = "941203188529397790"

client.on("guildMemberAdd" ,async(member) => {
    const img = await generateImage(member)

    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to the server`,
        files: [img]
    })
})
client.login(process.env.TOKEN)