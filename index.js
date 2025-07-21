// index.js - Optimized for compact design
const choices = document.querySelectorAll('.choices');
const result = document.getElementById('result');
const yourScore = document.getElementById('ys');
const compScore = document.getElementById('cs');
const resetBtn = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

// Add click effects and particles
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        // Add selected animation
        choice.classList.add('selected');
        setTimeout(() => choice.classList.remove('selected'), 600);
        
        // Create smaller particle effect
        createParticles(e.target, e.clientX, e.clientY);
        
        // Play the game
        playGame(choice.id);
    });
});

function createParticles(element, x, y) {
    // Reduced particle count for compact design
    for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--x', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 100 + 'px');
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 800);
    }
}

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let resultText = '';
    let resultClass = '';
    
    if (playerChoice === computerChoice) {
        resultText = "Tie!";
        resultClass = 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        resultText = 'You Win!';
        resultClass = 'win';
        playerScore++;
        yourScore.style.animation = 'none';
        yourScore.offsetHeight;
        yourScore.style.animation = 'scoreUpdate 0.5s ease-out';
        yourScore.textContent = playerScore;
    } else {
        resultText = 'Computer Wins!';
        resultClass = 'lose';
        computerScore++;
        compScore.style.animation = 'none';
        compScore.offsetHeight;
        compScore.style.animation = 'scoreUpdate 0.5s ease-out';
        compScore.textContent = computerScore;
    }
    
    result.className = '';
    // Shorter result text for compact design
    result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()} - ${resultText}`;
    result.classList.add(resultClass);
}

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    yourScore.textContent = '0';
    compScore.textContent = '0';
    result.className = '';
    result.textContent = 'PICK YOUR MOVE';
    
    // Add reset animation
    resetBtn.style.animation = 'none';
    resetBtn.offsetHeight;
    resetBtn.style.animation = 'loading 0.5s ease-out';
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.querySelector('main').style.animation = 'slideIn 0.8s ease-out';
});
