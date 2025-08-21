function showReading() {
    const question = document.getElementById('userQuestion').value;
    if (!question) {
        alert('Please enter your question');
        return;
    }
    
    document.getElementById('questionForm').classList.add('hidden');
    document.getElementById('reading').classList.remove('hidden');
    
    // Personalize the plain answer slightly
    const plainAnswer = document.getElementById('plainAnswer');
    if (question.toLowerCase().includes('love')) {
        plainAnswer.textContent = "Stop forcing romantic connection. Love comes through authentic resonance with your right person, not pushing alone.";
    } else if (question.toLowerCase().includes('money') || question.toLowerCase().includes('success')) {
        plainAnswer.textContent = "Stop forcing financial breakthrough alone. Prosperity comes through finding your right allies, not solo struggle.";
    }
}

function handlePayment() {
    // For now, just reveal the content
    // Later we'll integrate Stripe here
    alert('Payment processing coming soon! For testing, here\'s your full reading...');
    document.getElementById('paywall').classList.add('hidden');
    document.getElementById('premiumContent').classList.remove('hidden');
}

let tosses = [];
let currentToss = 1;

function startCoinToss() {
    document.getElementById('castingMethod').classList.add('hidden');
    document.getElementById('coinTossing').classList.remove('hidden');
}

function recordToss(value) {
    // 0=3tails(6), 1=2tails(8), 2=2heads(7), 3=3heads(9)
    tosses.push(value);
    
    document.getElementById('tossList').innerHTML += 
        `<div>Line ${currentToss}: ${getTossName(value)}</div>`;
    
    currentToss++;
    
    if (currentToss > 6) {
        calculateHexagram();
    } else {
        document.getElementById('tossNumber').textContent = currentToss;
    }
}

function getTossName(value) {
    const names = ['Changing Yin (6)', 'Yin (8)', 'Yang (7)', 'Changing Yang (9)'];
    return names[value];
}

function calculateHexagram() {
    // This is simplified - you'd need full calculation
    // For now, always shows Hex 39→8
    document.getElementById('coinTossing').classList.add('hidden');
    document.getElementById('getReading').classList.remove('hidden');
    
    // Show message about beta limitation
    alert('Your cast reveals Hexagram 39 transforming to Hexagram 8. (During beta, all readings explore this transformation.)');
}
