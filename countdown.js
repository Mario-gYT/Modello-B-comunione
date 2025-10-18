// Imposta la data di destinazione: 23 Gennaio 2026, ore 21:00 (Cambia qui per ogni nuovo Battesimo!)
// Mese è 0-based (0=Gennaio, 5=Giugno, etc.)
const destinationDate = new Date("Jun 28, 2026 11:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    if (!countdownElement) {
        return; 
    }
    
    const now = new Date().getTime();
    const distance = destinationDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "L'EVENTO È IN CORSO O È CONCLUSO!";
        return;
    }

    // Calcoli (I mesi sono una stima)
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const avgMsInMonth = msInDay * 30.4375; 

    const months = Math.floor(distance / avgMsInMonth);
    const days = Math.floor((distance % avgMsInMonth) / msInDay);
    const hours = Math.floor((distance % msInDay) / msInHour);
    const minutes = Math.floor((distance % msInHour) / msInMinute);
    const seconds = Math.floor((distance % msInMinute) / msInSecond);
    
    // Costruisce la stringa di output
    countdownElement.innerHTML = 
        `<span class="time-value">${months}</span> Mesi | ` + 
        `<span class="time-value">${days}</span> Giorni | ` +
        `<span class="time-value">${hours}</span> Ore | ` +
        `<span class="time-value">${minutes}</span> Min | ` +
        `<span class="time-value">${seconds}</span> Sec`;
}

// Aggiorna il conto alla rovescia ogni secondo
updateCountdown();
setInterval(updateCountdown, 1000);
