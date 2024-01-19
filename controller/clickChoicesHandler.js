import { checkingDoubleAns } from "../utils/checkDoubleAnswer.js";

export const userAnswers = [];
export function choiceHandler() {
    document.querySelectorAll(".Qs").forEach((Qs) => {//Qs is the parent div element (Qs classed div)

        const options = document.querySelectorAll('#' + Qs.id + ' div');

        //Below, we loop through the options so add event listener of click when we click the answer
        options.forEach((opt) => {
            opt.addEventListener("click", () => {
                options.forEach((opt) => {
                    opt.classList.remove("clicked");
                    opt
                })


                opt.classList.add("clicked");

                checkingDoubleAns(userAnswers, opt);

                userAnswers.push(`${opt.getAttribute('data-option')} ${opt.innerText}`);
                console.log(userAnswers);

            })


        })

        //the overall runs like.. qCards div - we loop through the first qCards div (q1) and get the divs of it (the options/opt) - we get in to the q2 and get the options in the q2 and so on...
    })
}