const messageGenerator = (arrayOne, arrayTwo, arrayThree) => {
  const arrayOneIndex = Math.floor(Math.random() * arrayOne.length);
  const arrayTwoIndex = Math.floor(Math.random() * arrayTwo.length);
  const arrayThreeIndex = Math.floor(Math.random() * arrayThree.length);
    console.log(arrayOneIndex)
  const randomJoke =
    arrayOne[arrayOneIndex] +
    " " +
    arrayTwo[arrayTwoIndex] +
    " " +
    arrayThree[arrayThreeIndex];
  return randomJoke;
};

const setups = [
  "Why did the tomato turn red?",
  "What do you call a bear with no teeth?",
  "Why don't scientists trust atoms?",
  "How do you organize a space party?",
  "What did the ocean say to the shore?",
  "What do you get when you cross a snowman and a vampire?",
  "Why did the scarecrow win an award?",
  "What did one wall say to the other wall?",
  "Why was the math book sad?",
  "How do you make a tissue dance?",
];

const punchlines = [
  "Because it saw the salad dressing!",
  "A gummy bear!",
  "Because they make up everything!",
  "You 'planet'!",
  "Nothing, it just waved!",
  "Frostbite!",
  "Because it was outstanding in its field!",
  "I'll meet you at the corner!",
  "Because it had too many problems!",
  "You put a little boogie in it!",
];

const additionalComponents = [
  "Knock-knock, who's there?",
  "Did you hear about the cheese factory explosion?",
  "Why did the bicycle fall over?",
  "How do you catch a squirrel?",
  "Why did the scarecrow become a successful comedian?",
  "Why did the chicken go to the seance?",
  "Why don't skeletons fight each other?",
  "Why don't scientists trust stairs?",
  "What do you get when you cross a cat and a lemon?",
  "Why did the golfer bring two pairs of pants?",
];

const joke = messageGenerator(setups, punchlines, additionalComponents);
console.log(joke);

