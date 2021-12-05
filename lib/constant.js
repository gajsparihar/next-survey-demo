export const QUIZES = [
  {
    id: 1,
    title: "Are you a traveller?",
    type: "choice",
    options: [
      { key: "no", value: "No" },
      { key: "yes", value: "Yes" },
    ],
  },
  {
    id: 2,
    title: "What type of traveller you are?",
    type: "choice",
    options: [
      { key: "business", value: "Business Travellers" },
      { key: "family", value: "Family Travellers" },
      { key: "holidaymakers", value: "Holiday Makers" },
      { key: "adventure", value: "Adventure Travellers" },
    ],
    condition: { questionId: 1, response: "yes" },
  },
  {
    id: 3,
    title: "What kind of business you do?",
    type: "choice",
    options: [
      { key: "software", value: "Software Business" },
      { key: "hotel", value: "hotel business" },
    ],
    condition: { questionId: 2, response: "business" },
    isLast: true,
  },
  {
    id: 4,
    title: "Ok - then what you like to do in your vacation?",
    type: "choice",
    options: [
      { key: "learning", value: "Learning new skills" },
      { key: "family", value: "Spent time with family" },
      { key: "meditation", value: "Going to Meditation center" },
    ],
    condition: { questionId: 1, response: "no" },
    isLast: true,
  },
];
