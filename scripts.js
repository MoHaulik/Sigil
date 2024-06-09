document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('create-sigil-button').addEventListener('click', function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('goal-input').style.display = 'block';
    });

    document.getElementById('generate-sigil-button').addEventListener('click', function() {
        const goal = document.getElementById('goal').value;
        if (goal.trim() === '') {
            alert('Please enter a goal.');
            return;
        }
        const sigil = createSigil(goal);
        document.getElementById('goal-input').style.display = 'none';
        document.getElementById('sigil').innerText = sigil;
        document.getElementById('sigil-large').innerText = sigil;
        document.getElementById('sigil-display').style.display = 'block';
    });

    document.getElementById('start-meditation-button').addEventListener('click', function() {
        document.getElementById('sigil-display').style.display = 'none';
        document.getElementById('meditation-zone').style.display = 'block';
        setInterval(() => {
            const text = document.getElementById('breathing-text');
            text.innerText = text.innerText === 'Breathe in...' ? 'Breathe out...' : 'Breathe in...';
        }, 4000);
    });

    function createSigil(goal) {
        const sanitizedGoal = goal.replace(/[aeiou\s]/gi, '').toUpperCase();
        const uniqueLetters = [...new Set(sanitizedGoal)];
        return uniqueLetters.join('');
    }
});
