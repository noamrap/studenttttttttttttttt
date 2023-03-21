var currentTip = 1;
function revealTip() {
	document.getElementById('tip' + currentTip).style.display = 'block';
	document.getElementById('reveal-button').disabled = true;
}
function useTip(tipNumber) {
	if (tipNumber == currentTip) {
		document.getElementById('tip' + currentTip).style.display = 'none';
		document.getElementById('reveal-button').disabled = false;
		currentTip++;
	}
}