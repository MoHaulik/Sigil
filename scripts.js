function showGoalInput() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('goal-input').style.display = 'block';
}

function generateSigil() {
    const goal = document.getElementById('goal').value;
    const sigil = createSigil(goal);
    document.getElementById('goal-input').style.display = 'none';
    document.getElementById('sigil').innerText = sigil;
    document.getElementById('sigil-large').innerText = sigil;
    document.getElementById('sigil-display').style.display = 'block';
}

function createSigil(goal) {
    const sanitizedGoal = goal.replace(/[aeiou\s]/gi, '').toUpperCase();
    const uniqueLetters = [...new Set(sanitizedGoal)];
    return uniqueLetters.join('');
}

function startMeditation() {
    document.getElementById('sigil-display').style.display = 'none';
    document.getElementById('meditation-zone').style.display = 'block';
    setInterval(() => {
        const text = document.getElementById('breathing-text');
        text.innerText = text.innerText === 'Breathe in...' ? 'Breathe out...' : 'Breathe in...';
    }, 4000);
}
