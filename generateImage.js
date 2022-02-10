// for this we use a npm i canvas to install all the required packages for the welcome message with an image
const Canvas= require("canvas")

const Discord =require("discord.js")
const backround ="https://i.imgur.com/zvWTUVu.jpg"

const dim={
    height:675,
    width:1200,
    margin:50
}


const av={
    size:256,
    x:800,
    y:491
}

const generateImage=async (member) => {
    let username = member.user.username
    let discrim= member.user.discriminator
    let avatarURL=member.user.displayAvatarURL({format :"png",dynamic:false, size:av.size})  

    const canvas=Canvas.createCanvas(dim.width,dim.height)
    const ctx = canvas.getContext("2d")

// backround
    const backimg=  await Canvas.loadImage(backround)
    ctx.drawImage(backimg , 0 , 0)


 // draw black box
    ctx.fillStyle ="rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin,dim.width - 2 * dim.margin ,dim.height - 2 * dim.margin)
                // (x,         y        , length                   ,height                       )  )
// avatar image
const avimg= await Canvas.loadImage(avatarURL)  
ctx.save()

ctx.beginPath()
ctx.arc(av.x + av.size/2 , av.y + av.size/2 , av.size/2 , 0 ,Math.PI * 2 , true)
ctx.closePath()
ctx.clip()

ctx.drawImage(avimg , av.x , av.y)
ctx.restore()

// write in texts
ctx.fillStyle="white"
ctx.textAlign="centre"

// big welcome message
ctx.font="50px Comic Sans MS"
ctx.fillText("Welcome!!", dim.width/2 , dim.margin+25)
//ctx.textAlign="centre"

// call in user
ctx.font="60px Comic Sans MS"
ctx.fillText(username , discrim , dim.width/2 , dim.height-dim.margin-125)
//ctx.textAlign="centre"

// call in welcome
ctx.font="40px Comic Sans MS"
ctx.fillText("To the server",dim.width/2,dim.height-dim.margin-50)

const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"Welcome.png")
return attachment

}
module.exports=generateImage