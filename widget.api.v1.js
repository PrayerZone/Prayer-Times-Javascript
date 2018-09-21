function PrayerTimesApi() {
    var userLang = navigator.language || navigator.userLanguage;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var prayer_results = JSON.parse(request.responseText);
                var prayer_date = new Date(prayer_results.results.datetime[0].date.gregorian);
                var local_offset = prayer_results.results.location.local_offset;
                document.getElementById("prayer_city").innerHTML = prayer_results.results.location.city;
                document.getElementById("prayer_date").innerHTML = prayer_date.toLocaleDateString(userLang, options);
                document.getElementById("Imsak").innerHTML = prayer_results.results.datetime[0].times.Imsak;
                document.getElementById("Fajr").innerHTML = prayer_results.results.datetime[0].times.Fajr;
                document.getElementById("Dhuhr").innerHTML = prayer_results.results.datetime[0].times.Dhuhr;
                document.getElementById("Asr").innerHTML = prayer_results.results.datetime[0].times.Asr;
                document.getElementById("Maghrib").innerHTML = prayer_results.results.datetime[0].times.Maghrib;
                document.getElementById("Isha").innerHTML = prayer_results.results.datetime[0].times.Isha;
                SetTheClock(local_offset);
            } else {
                console.log('An error occurred during your request: ' + request.status + ' ' + request.statusText);
            }
        }
    };
    request.open('Get', api_url, true);
    request.send();
}
function time(offset) {
    var location_date = new Date(new Date().getTime() + offset * 3600000);
    var hours = location_date.getUTCHours(),
        minutes = location_date.getUTCMinutes(),
        seconds = location_date.getUTCSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById("prayer_clock").innerHTML = hours + ':' + minutes + ':' + seconds;
}
function addZero(val) {
    return val <= 9 ? "0" + val : val;
}
function SetTheClock(local_offset) {
    time(local_offset);
    setInterval(function () { time(local_offset); }, 1000);
}