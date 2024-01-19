import { createHtml } from "../model/makeQuiz.js";
import { choiceHandler } from "../controller/clickChoicesHandler.js";
import { index } from "../controller/nextQuestion.js";
import { nextQuestion } from "../controller/nextQuestion.js";

(function () {
    'use strict'
    document.querySelector('.backFromDS-wrapper').style.display = 'none';
    createHtml(index);
    choiceHandler();
    document.getElementById('next').addEventListener('click', nextQuestion)
}())

