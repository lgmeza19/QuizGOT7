// Variables
const questions =[
    // Question 1
    {
        image: "imgs/g7_question1.jpg",
        alt: " Image question 1",
        question: "¿En qué fecha debutó el grupo GOT7?",
        answers: [
            {answer: "17 de septiembre de 2015", isCorrect: false},
            {answer: "22 de octubre de 2018", isCorrect: false},
            {answer: "16 de enero de 2014", isCorrect: true},
            {answer: "16 de septiembre de 2016", isCorrect: false},
        ] 
    },
    // Question 2
    {
        image: "imgs/g7_question2.jpeg",
        alt: " Image question 2",
        question: "¿Cuál fue la canción debut de GOT7?",
        answers: [
            {answer: "Lullaby", isCorrect: false},
            {answer: "Tomorrow, Today", isCorrect: false},
            {answer: "Stop Stop It", isCorrect: false},
            {answer: "Girls Girls Girls", isCorrect: true},
        ]
    },
    // Question 3
    {
        image: "imgs/g7_question3.jpeg",
        alt: " Image question 3",
        question: "¿Cuál fue el album debut de GOT7?",
        answers: [
            {answer: "Got It?", isCorrect: true},
            {answer: "GOT7", isCorrect: false},
            {answer: "Identify", isCorrect: false},
            {answer: "DYE", isCorrect: false},
        ]
    },
    // Question 4
    {
        image: "imgs/g7_question4.jpg",
        alt: " Image question 4",
        question: "Dentro del grupo GOT7 hay 2 subunidades, ¿cuál es su nombre?",
        answers: [
            {answer: "Team Wang, Only2", isCorrect: false},
            {answer: "Just2, JJProject", isCorrect: true},
            {answer: "Amerithaikong, GOD7", isCorrect: false},
            {answer: "GET7, SevenEleven", isCorrect: false},
        ]
    },
    // Question 5
    {
        image: "imgs/g7_question5.jpg",
        alt: " Image question 5",
        question: "¿Cuál es el nombre del líder de GOT7?",
        answers: [
            {answer: "Kim Yugyeom", isCorrect: false},
            {answer: "Jackson Wang", isCorrect: false},
            {answer: "Lim Jaebeom - Jay B", isCorrect: true},
            {answer: "Bambam", isCorrect: false},
        ]
    },
    // Question 6
    {
        image: "imgs/g7_question6.jpeg",
        alt: " Image question 6",
        question: "¿En qué álbum se encuentra la canción 'Hard Carry'?",
        answers: [
            {answer: "Flight Log: Departure", isCorrect: false},
            {answer: "Flight Log: Turbulence", isCorrect: true},
            {answer: "Flight Log: Arrival", isCorrect: false},
            {answer: "Present: YOU", isCorrect: false},
        ]
    },
    // Question 7
    {
        image: "imgs/g7_question7.jpeg",
        alt: " Image question 7",
        question: "¿Qué miembro de GOT7 compuso la canción 'Page'?",
        answers: [
            {answer: "Kim Yugyeom", isCorrect: false},
            {answer: "Lim Jaebeom - Jay B", isCorrect: true},
            {answer: "Park Jinyoung", isCorrect: false},
            {answer: "Choi Youngjae", isCorrect: false},
        ]
    },
    // Question 8
    {
        image: "imgs/g7_question8.jpg",
        alt: " Image question 8",
        question: "¿Qué canción de GOT7 es la más conocida?",
        answers: [
            {answer: "Just Right", isCorrect: true},
            {answer: "Hard Carry", isCorrect: false},
            {answer: "You Calling My Name", isCorrect: false},
            {answer: "Stop Stop It", isCorrect: false},
        ]
    },
    // Question 9
    {
        image: "imgs/g7_question9.jpeg",
        alt: " Image question 9",
        question: "¿Qué canción de GOT7 es para Migajear?",
        answers: [
            {answer: "Darling", isCorrect: false},
            {answer: "Enough", isCorrect: false},
            {answer: "You Calling My Name", isCorrect: false},            
            {answer: "If You Do", isCorrect: true},
        ]
    },
    // Question 10
    {
        image: "imgs/g7_question10.jpg",
        alt: " Image question 10",
        question: "¿En que año GOT7 recibió los derechos de su marca?",
        answers: [
            {answer: "2022", isCorrect: false},
            {answer: "2021", isCorrect: true},
            {answer: "2022", isCorrect: false},            
            {answer: "2023", isCorrect: false},
        ]
    },
    // Question 11
    {
        image: "imgs/g7_question11.jpeg",
        alt: " Image question 11",
        question: "¿Cuál es el nombre del último EP de GOT7?",
        answers: [
            {answer: "Winter Heptagon", isCorrect: true},
            {answer: "GOT7", isCorrect: false},
            {answer: "Breath of Love: Last Piece", isCorrect: false},
            {answer: "DYE", isCorrect: false},
        ]
    },
    // Question 12
    {
        image: "imgs/g7_question12.jpg",
        alt: " Image question 12",
        question: "¿Cuál es el nombre de la canción principal de Winter Heptagon?",
        answers: [
            {answer: "Smooth", isCorrect: false},
            {answer: "Python", isCorrect: true},
            {answer: "Tidal Wave", isCorrect: false},
            {answer: "Out The Door", isCorrect: false},
        ]
    }
];

// Questions selector
const questionText = document.querySelector("#question");
const answersButtons = document.querySelector("#answear-buttons");
const nextBtn = document.querySelector("#next-btn");
// Images selector
const divImage = document.querySelector(".images-questions");
const winDiv = document.createElement("div");
// Audio Button selector
const audioBtn = document.querySelector("#audioBtn");
const audioG7 = document.querySelector("#audioG7");
const audioBtnImg = document.querySelector("#audioBtn img");

let currentQuestionIndex = 0;
let score = 0;

// Load quiz 
document.addEventListener("DOMContentLoaded", startQuiz);

// Event Listener for next button
nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

// Event Listener for audio button
audioBtn.addEventListener("click", () => {
    if(audioG7.paused){
        audioG7.play();
        audioBtnImg.src = "imgs/play.png";
    }else{
        audioG7.pause();
        audioBtnImg.src = "imgs/pause.png";
    }
});

// Functions
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.textContent = "Next";
    showQuestion();
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionText.textContent = `Tu puntuación es ${score} de ${questions.length}!!`;
    nextBtn.textContent = "Jugar de nuevo";
    nextBtn.style.display = "block";
    if(score === questions.length){
       showWin("¡Felicidades! Eres una Ahgase Legendaria👑", "imgs/ahgase_legendaria.png", "legendaryAhgase");
    }else if(score >= questions.length * 0.7){
        showWin("¡Bien hecho Ahgase! Sabes mucho sobre GOT7 🤩", "imgs/g7_grats2.gif", "ahgase");
    }else if(score >= questions.length * 0.4){
        showWin("¡Nada mal Ahgase! Pero podrías repasar sus discografías 👀", "imgs/g7_grats1.gif", "ahgase");
    }else{
        showWin("¡Sigue aprendiendo! GOT7 tiene mucho que ofrecer 💚🐥", "imgs/g7_ahgababy.png", "ahgase");
    }
}

function showWin(text, image, alt){
    winDiv.classList.add("win");
    const winText = document.createElement("h2");
    winText.textContent = text;
    const img = document.createElement("img");
    img.src = image;
    img.alt = alt;
    winDiv.appendChild(winText);
    winDiv.appendChild(img);
    questionText.after(winDiv);
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.textContent = `${questionNo}. ${currentQuestion.question.toUpperCase()}`;
    // Add image
    const img = document.createElement("img");
    img.src = currentQuestion.image;
    img.alt = currentQuestion.alt; 
    divImage.appendChild(img);
    // Add answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.answer;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        if(answer.isCorrect){
            button.dataset.isCorrect = answer.isCorrect;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    resetImage();
    resetWinDiv();
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function resetImage(){
    while(divImage.firstChild){
        divImage.removeChild(divImage.firstChild);
    }
}

function resetWinDiv(){
    while(winDiv.firstChild){
        winDiv.removeChild(winDiv.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.isCorrect === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answersButtons.children).forEach(btn => {
        if(btn.dataset.isCorrect === "true"){
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextBtn.style.display = "block";
}