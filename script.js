// Vocabulary questions
const vocabQuestions = [
    { japanese: "仲間 (なかま)", answer: "Friend/Companion", options: ["Enemy", "Friend/Companion", "Teacher", "Hero"] },
    { japanese: "力 (ちから)", answer: "Power", options: ["Magic", "Strength", "Power", "Wisdom"] },
    { japanese: "愛 (あい)", answer: "Love", options: ["Hate", "Love", "Dream", "Honor"] },
    { japanese: "未来 (みらい)", answer: "Future", options: ["Future", "Past", "Destiny", "Life"] },
    { japanese: "心 (こころ)", answer: "Heart", options: ["Sword", "Heart", "Spirit", "Body"] },
    { japanese: "勇気 (ゆうき)", answer: "Courage", options: ["Fear", "Courage", "Weakness", "Strength"] },
    { japanese: "友情 (ゆうじょう)", answer: "Friendship", options: ["Enmity", "Friendship", "Love", "Trust"] },
    { japanese: "夢 (ゆめ)", answer: "Dream", options: ["Nightmare", "Dream", "Reality", "Wish"] },
    { japanese: "運命 (うんめい)", answer: "Fate", options: ["Luck", "Fate", "Coincidence", "Future"] },
    { japanese: "希望 (きぼう)", answer: "Hope", options: ["Despair", "Hope", "Fear", "Confidence"] },
    // Add more vocabulary here!
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Show the question
  function showQuestion() {
    document.getElementById("game").style.display = "block"; // Show game UI
    document.getElementById("score-page").style.display = "none"; // Hide score page
  
    document.getElementById("question").textContent = vocabQuestions[currentQuestion].japanese;
    const options = document.getElementsByClassName("option-btn");
    
    vocabQuestions[currentQuestion].options.forEach((option, index) => {
      options[index].textContent = option;
      options[index].classList.remove("correct", "wrong"); // Reset classes
    });
  }
  
  // Check the answer
  function checkAnswer(selectedIndex) {
    const correctAnswer = vocabQuestions[currentQuestion].answer;
    const selectedAnswer = vocabQuestions[currentQuestion].options[selectedIndex];
  
    const options = document.getElementsByClassName("option-btn");
    
    // Highlight the correct answer
    for (let i = 0; i < options.length; i++) {
      if (options[i].textContent === correctAnswer) {
        options[i].classList.add("correct");
      }
    }
  
    // Highlight the wrong answer if selected
    if (selectedAnswer !== correctAnswer) {
      options[selectedIndex].classList.add("wrong");
    } else {
      score++; // Increment score for correct answer
    }
  
    currentQuestion++; // Move to the next question
  
    document.getElementById("score").textContent = "Score: " + score;
  
    // Move to the next question or end the game
    if (currentQuestion < vocabQuestions.length) {
      setTimeout(showQuestion, 1000); // Show next question after 1 second
    } else {
      endGame(); // End the game if there are no more questions
    }
  }
  
  // End the game and show the final score
  function endGame() {
    document.getElementById("final-score").textContent = "Your total score is: " + score;
    document.getElementById("score-page").style.display = "block"; // Show score page
    document.getElementById("game").style.display = "none"; // Hide game UI
  }
  
  // Restart the game
  function restartGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("restart-btn").style.display = "none"; // Hide restart button
    showQuestion(); // Show the first question
  }
  
  // Start the game
  showQuestion();
  