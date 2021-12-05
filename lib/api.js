import { QUIZES } from "./constant.js";

export function getQuiz() {
  return new Promise((resolve, reject) => {
    resolve(QUIZES);
  });
}

export function saveQuizAnswers(answers) {
  console.log(answers);
}
