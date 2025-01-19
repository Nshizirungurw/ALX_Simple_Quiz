function checkAnswer() {
    const correctAnswer = "4";
    
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    const userAnswer = selectedOption.value;

    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
    }
}
document.getElementById("submit-answer").addEventListener("click",checkAnswer);


