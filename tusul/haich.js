const choicebtns=document.querySelectorAll(".choice-btn")

const playerchoicetext=document.querySelector('.player-choice-text')
const cpuchoicetext=document.querySelector('.cpu-choice-text')
const gametitle=document.querySelector(".game-title")
const scorewontext=document.querySelector(".score-won-text")
const scoredrawtext=document.querySelector(".score-draw-text")
const scorelosttext=document.querySelector(".score-lost-text")

let playerresultvalue=""
let cpuresultvalue=""

const choiceemoji={
    rock:"✊",
    paper:"🤚",
    scissor:"✌️"
}

choicebtns.forEach((choicebtn) => {
    choicebtn.addEventListener("click", () => {
        playerchoicetext.textContent = "✊"
        cpuchoicetext.textContent = "✊"

        playerresultvalue = choicebtn.value
        cpuresultvalue = getcpuvalue()

        playerchoicetext.classList.add("player-choice-text-anim")
        cpuchoicetext.classList.add("cpu-choice-text-anim")

        setTimeout(() => {
            playerchoicetext.textContent = choiceemoji[playerresultvalue]
            cpuchoicetext.textContent = choiceemoji[cpuresultvalue]

            playerchoicetext.classList.remove("player-choice-text-anim")
            cpuchoicetext.classList.remove("cpu-choice-text-anim")

            showresultgame()
        }, 2000)
    })
})


function getcpuvalue(){
    const cpuoptionchoices=["rock","paper","scissor"]
    const cpurandomchoice =cpuoptionchoices[Math.floor(Math.random()*cpuoptionchoices.length)]
    return cpurandomchoice
}

function showresultgame(){
    if(playerresultvalue==cpuresultvalue){
        gametitle.textContent="Тэнцсэн"
        scoredrawtext.textContent++
    } else if(
        playerresultvalue=="rock"&& cpuresultvalue=="scissor"
        ||
         playerresultvalue=="paper"&&cpuresultvalue=="rock"
        ||
        playerresultvalue=="scissor"&&cpuresultvalue=="paper"
    ){
        gametitle.textContent="Та хожлоо"
        scorewontext.textContent++
    }
    else{
        gametitle.textContent="Та хожигдлоо"
        scorelosttext.textContent++
    }
}
