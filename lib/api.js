import { SURVEY } from "./constant.js";

export function getSurvey() {
  return new Promise((resolve, reject) => {
    resolve(SURVEY);
  });
}

export function saveSurveyResponse(answers) {
  console.log(answers);
}
