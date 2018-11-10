client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
      let welcomer = member.guild.channels.find('name', "welcome");
        if (!welcomer) return;     
        welcomer.send(`Welcome To **Elite Store**, ${member.user}! You are The **${member.guild.memberCount}** user!`);
        var Canvas = require('canvas')
       var jimp = require('jimp')
       const w = ['./w11.jpg'];
        let Image = Canvas.Image,
            canvas = new Canvas(2000, 600),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(30, -50) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
