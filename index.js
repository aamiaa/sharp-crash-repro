const sharp = require("sharp")

async function doJob() {
    await sharp("assets/cardFrame_M_4.png").resize(312, 510, {fit: "fill"}).toBuffer()
    await sharp({
        create: {
            width: 312,
            height: 54,
            channels: 4,
            background: {r: 60, g: 60, b: 88}
        }
    }).png().toBuffer()
    await sharp("assets/rarity_star_afterTraining.png").resize(44, 44).toBuffer()
    await sharp("assets/icon_attribute_cool_64.png").toBuffer()
    await sharp({
        text: {
            text: `<span color="#FFFFFF">Lv.60</span>`,
            font: "FOT-RodinNTLG Pro EB",
            fontfile: "assets/FOT-RodinNTLGPro-EB.otf",
            rgba: true,
            dpi: 170
        }
    }).png().toBuffer()
    await sharp("assets/masterRank_L_5.png").resize(78, 79).toBuffer()
}

async function main() {
    sharp.cache(false)
    let tasks = []

    for(let i=1;i<=1000;i++) {
        tasks.push(doJob())

        if(i%5 === 0) {
            await Promise.allSettled(tasks)
            console.log(i)
            tasks = []
        }
    }
    
    console.log("finished")
}
main()