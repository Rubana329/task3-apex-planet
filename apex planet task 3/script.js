// ------------------ QUIZ LOGIC ------------------
const quizData = [
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Colorful Style Scripts", "Creative Style Syntax"],
    correct: 0
  },
  {
    question: "Which language is used for web apps?",
    answers: ["PHP", "Python", "JavaScript"],
    correct: 2
  },
  {
    question: "What does API stand for?",
    answers: ["Application Programming Interface", "Advanced Protocol Input", "Application Page Instruction"],
    correct: 0
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer}`;
    answersEl.appendChild(li);
  });
}

document.getElementById("next").addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    const isCorrect = parseInt(selected.value) === quizData[currentQuestion].correct;
    alert(isCorrect ? "Correct!" : "Wrong Answer.");
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      document.getElementById("quiz").innerHTML = "<p>You have completed the quiz!</p>";
    }
  } else {
    alert("Please select an answer.");
  }
});

showQuestion();

// ------------------ API FETCH LOGIC ------------------
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeDisplay").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("jokeDisplay").textContent = "Error fetching joke.";
    });
}
