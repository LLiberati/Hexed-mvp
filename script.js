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
