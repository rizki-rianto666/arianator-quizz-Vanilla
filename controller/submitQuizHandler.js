import calculateScore from "../utils/calculateScore.js";
import { QA } from "../model/quizData.js";

let score = 0
function submitQuizHandler() {

    //change the subtitle quizz
    document.querySelector('header h2').textContent = 'THANK YOU, NEXT?'

    score = calculateScore();
    document.getElementById('qCards').style.display = 'none';
    document.getElementById('displayScore').innerHTML = `QUIZZ IS FINISHED <br>
        YOU SCORE <span class="scoreSpan">${score}</span> OUT OF <span class="scoreSpan">${Object.keys(QA).length}</span>
        `;
    if (score <= ((Object.keys(QA).length) / 100 * 30)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
            DO YOU EVEN KNOW HER ?
        </span>
        `
    }
    else if (score <= ((Object.keys(QA).length) / 2)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
         You may like her, but you are not an Arianator, sorry
        </span>
        `
    } else if (score <= ((Object.keys(QA).length) / 100 * 70)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
            You Are Average Ariana Fan
        </span>
        `
    } else if (score < ((Object.keys(QA).length) / 100 * 100)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
            You Are A Real Arianator
        </span>
        `
    } else if (score === Object.keys(QA).length) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
         YOU LOVE HER SO MUCH, YOU ARE A DIE-HARD ARIANATOR!!
        </span>
        `
    }
    document.querySelector('.wrapper').style.display = "none"

    document.querySelector('.backFromDS-wrapper').style.display = 'block';

}

export default function submitQuizz() {
    document.getElementById('submit').addEventListener("click", submitQuizHandler)
}
