import { QA } from "../model/quizData.js";
import { createHtml } from "../model/makeQuiz.js";
import submitQuizz from './submitQuizHandler.js'
import { choiceHandler } from "./clickChoicesHandler.js";


export let index = 0;
export function nextQuestion() {

    if (index < Object.keys(QA).length - 1) {
        document.querySelector('.Qs').remove()
        index++;
        console.log(Object.keys(QA).length, index);
        createHtml(index);

        //CLICK CHOICE
        choiceHandler()
    } else {
        document.querySelector('.button-wrapper').innerHTML = `
        <button id="submit">Submit</button>
        `
        submitQuizz();
    }

}
