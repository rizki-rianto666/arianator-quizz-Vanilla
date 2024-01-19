

export function createCardsHTML(key, question, counter) {
    const divQs = document.createElement('div');
    divQs.setAttribute('id', `${key}`)
    divQs.setAttribute('class', 'Qs')

    let html = `<h4 class="questions">${counter + 1}. ${question.question}</h4>`; counter++

    question.choices.forEach(choice => {
        html += ` <div class="opt" data-option="${key}">
        <p>${choice}</p>
    </div>`
    });



    divQs.innerHTML = html;
    return divQs;
}