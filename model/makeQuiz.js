import { QA } from './quizData.js'
import { createCardsHTML } from './quizCards.js';

let keys = [];
for (const key in QA) {
    if (Object.hasOwnProperty.call(QA, key)) {
        keys.push(key)

    }

}


export function createHtml(index) {
    let key = keys[index]
    let qs = QA[key]
    document.getElementById('qCards').append(createCardsHTML(key, qs, index));
}

//ADDITIONAL FUNCTIONS


