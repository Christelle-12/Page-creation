document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    currentDate.setUTCHours(currentDate.getUTCHours() - 1);

    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;

    const localTime = currentDate.toLocaleString('en-US', { timeZone: 'Europe/Bucharest' });
    document.querySelector('[data-testid="currentUTCTime"]').textContent = localTime;
});
